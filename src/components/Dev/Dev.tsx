import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import cx from "classnames"
import { Combination, combinationsData } from "../Combinations/combinationsData"
import { useStateToggle } from '@helpers/useStateToggle'
import { activePlayerPoints } from "@store/playerPoints"
import { updateDices } from "@store/dices"
import { saveCombination } from "@store/saveCombination"
import { history, historyUpdateDices } from "@store/history"
import { players } from "@store/players/players"
import { useSignals } from "@preact/signals-react/runtime"

function HistoryPreview() {
    const preparedHistory = useMemo(function () {
        const res: any = {}
        Object.keys(history.value).forEach(function (key) {
            res[players.getById(key) ? players.getById(key).name : key] = history.value[key]
        })
        return res
    }, [players.value, history.value])

    if (!Object.keys(preparedHistory).length) {
        return null
    }

    return (
        <pre className="fixed top-1 bottom-1 right-1 rounded p-1 z-[999999] bg-amber-800 overflow-auto text-xs">
            {JSON.stringify(preparedHistory, function (key, value) {
                if (key === "tries" || key === "dicesSelected") {
                    return JSON.stringify(value)
                }
                return value
            }, 2)}
        </pre>
    )
}

export const Dev = memo(function () {
    const [open, , setOpen] = useStateToggle()
    const [visible, setVisible] = useState(false)

    useSignals()

    function fakeSet(combination: Combination, points: number, min: boolean) {
        switch (combination) {
            case Combination.ONE:
            case Combination.TWO:
            case Combination.THREE:
            case Combination.FOUR:
            case Combination.FIVE:
            case Combination.SIX:
                if (min) {
                    updateDices(
                        new Array(3).fill(combination).concat(
                            new Array(2).fill(combination === Combination.SIX
                                ? combination - 1
                                : combination + 1,
                            ),
                        ),
                    )
                } else {
                    updateDices(new Array(5).fill(combination))
                }
                break
            case Combination.EQUAL_3:
                if (min) {
                    updateDices([1, 1, 1, 4, 6])
                } else {
                    updateDices([6, 6, 6, 4, 2])
                }
                break
            case Combination.EQUAL_4:
                if (min) {
                    updateDices([1, 1, 1, 4, 1])
                } else {
                    updateDices([6, 6, 6, 4, 6])
                }
                break
            case Combination.SMALL_STRAIGHT:
                updateDices([2, 3, 4, 5, 5])
                break
            case Combination.BIG_STRAIGHT:
                updateDices([1, 2, 3, 4, 5])
                break
            case Combination.TWO_PAIR:
                updateDices([2, 2, 3, 4, 4])
                break
            case Combination.FULL_HOUSE:
                updateDices([3, 3, 3, 5, 5])
                break
            case Combination.CHANCE:
                if (min) {
                    updateDices([1, 1, 1, 1, 1])
                } else {
                    updateDices([6, 6, 6, 6, 6])
                }
                break
            case Combination.THE_YACHT:
                updateDices([4, 4, 4, 4, 4])
                break
        }

        players.move.update(function ([playerId, shot]) {
            return [playerId, shot + 1]
        })
        historyUpdateDices()
        saveCombination({ combination, points })
    }

    useEffect(function () {
        if (window.location.search && window.location.search === "?dev") {
            setVisible(true)
        }
    }, [setVisible])

    const dump = useCallback(function () {
        console.group("state")
        console.log({ history: history.value })
        console.groupEnd()
    }, [])

    if (!visible) {
        return null
    }

    return (
        <>
            <div className="absolute bottom-2 left-2 flex gap-3">
                <button type="button" className={cx(open && "shadow-none")} onClick={function () {
                    setOpen(true)
                }}>Dev</button>
                <button type="button" onClick={dump}>Dump</button>
            </div>

            {open && createPortal(
                <>
                    <HistoryPreview />
                    <div className={cx(
                        "z-10",
                        "bg-[--background-color] shadow-2xl rounded",
                        "fixed left-2 top-1/2 -translate-y-1/2",
                        "p-3",
                        "min-w-max",
                    )}>
                        <div className="w-full grid grid-cols-[150px_200px_50px]">
                            {combinationsData.map(function ({ combination, name, min, max }, index) {
                                if (combination === Combination.BONUS) {
                                    return null
                                }
                                return (
                                    <Row
                                        key={index}
                                        isLast={index !== combinationsData.length - 1 ? "border-b" : ""}
                                        name={name}
                                        min={min}
                                        max={max}
                                        combination={combination}
                                        onClick={fakeSet}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </>,
                document.body,
            )}
        </>
    )
}, function () {
    return true
})

interface RowProps {
    combination: Combination
    isLast: string
    name: string
    min?: number
    max: number

    onClick(combination: Combination, points: number, min: boolean): void
}

function Row({ combination, isLast, name, min, max, onClick }: RowProps) {
    const [points, setPoints] = useState(min || max)
    const playerPoints = activePlayerPoints.value
    const disabled = Object.keys(playerPoints).indexOf(`${combination}`) === -1

    return (
        <>
            <div className={cx("py-3 border-[--line-color] pl-3", isLast)}>{name}</div>
            <div
                className={cx("border-x flex justify-between px-3 py-1 border-[--line-color]", isLast)}
                onChange={function (e) {
                    // @ts-ignore
                    setPoints(parseInt(e.target["value"], 10))
                }}
            >
                {min === undefined ? null : (
                    <label
                        className="flex items-center cursor-pointer relative px-2 rounded overflow-hidden w-20">
                        <input type="radio" name={`${combination}`}
                            value={min}
                            className="hidden peer/draft"
                            defaultChecked />
                        <div
                            className="absolute inset-0 peer-checked/draft:bg-[--text-color-semi]" />
                        <div className="relative">min: {min}</div>
                    </label>
                )}
                <label
                    className="flex items-center cursor-pointer relative px-2 rounded overflow-hidden w-20">
                    <input
                        type="radio"
                        name={`${combination}`}
                        className="hidden peer/draft"
                        value={max}
                        defaultChecked={min === undefined} />
                    <div className="absolute inset-0 peer-checked/draft:bg-[--text-color-semi]" />
                    <div className="relative">max: {max}</div>
                </label>
            </div>
            <button
                className={cx(
                    "py-3 border-[--line-color]",
                    isLast,
                    !disabled && "text-[--background-color-active]",
                )}
                disabled={!disabled}
                onClick={function () {
                    onClick(combination, points, min !== undefined && points === min)
                }}
            >
                DO
            </button>
        </>
    )
}
