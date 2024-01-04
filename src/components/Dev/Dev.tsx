import { memo, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Backdrop } from "../Backdrop"
import cx from "classnames"
import { Combination, combinationsData } from "../Combinations/combinationsData"
import { saveCombinationSelector } from "../../recoil/selectors/saveCombinationSelector"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { dicesAtom, playerPointsAtomFamily } from "../../recoil/atoms"
import { historyUpdateDicesSelector } from "../../recoil/selectors/historyUpdateDicesSelector"
import { useStateToggle } from '@helpers/useStateToggle'
import { activePlayerId } from "@signals/players/activePlayerId"
import { updatePlayerMove } from "@signals/players/playerMove"

export const Dev = memo(function () {
    const [open, toggle] = useStateToggle()
    const [visible, setVisible] = useState(false)

    const saveCombination = useSetRecoilState(saveCombinationSelector)
    const setDices = useSetRecoilState(dicesAtom)
    const history = useSetRecoilState(historyUpdateDicesSelector)

    function fakeSet(combination: Combination, points: number, min: boolean) {
        switch (combination) {
            case Combination.ONE:
            case Combination.TWO:
            case Combination.THREE:
            case Combination.FOUR:
            case Combination.FIVE:
            case Combination.SIX:
                if (min) {
                    setDices(
                        new Array(3).fill(combination).concat(
                            new Array(2).fill(combination === Combination.SIX
                                ? combination - 1
                                : combination + 1,
                            ),
                        ),
                    )
                } else {
                    setDices(new Array(5).fill(combination))
                }
                break
            case Combination.EQUAL_3:
                if (min) {
                    setDices([1, 1, 1, 4, 6])
                } else {
                    setDices([6, 6, 6, 4, 2])
                }
                break
            case Combination.EQUAL_4:
                if (min) {
                    setDices([1, 1, 1, 4, 1])
                } else {
                    setDices([6, 6, 6, 4, 6])
                }
                break
            case Combination.SMALL_STRAIGHT:
                setDices([2, 3, 4, 5, 5])
                break
            case Combination.BIG_STRAIGHT:
                setDices([1, 2, 3, 4, 5])
                break
            case Combination.TWO_PAIR:
                setDices([2, 2, 3, 4, 4])
                break
            case Combination.FULL_HOUSE:
                setDices([3, 3, 3, 5, 5])
                break
            case Combination.CHANCE:
                if (min) {
                    setDices([1, 1, 1, 1, 1])
                } else {
                    setDices([6, 6, 6, 6, 6])
                }
                break
            case Combination.THE_YACHT:
                setDices([4, 4, 4, 4, 4])
                break
        }

        updatePlayerMove(function ([playerId, shot]) {
            return [playerId, shot + 1]
        })
        history(true)
        saveCombination({ combination, points })
    }

    useEffect(function () {
        if (window.location.search && window.location.search === "?dev") {
            setVisible(true)
        }
    }, [setVisible])

    if (!visible) {
        return null
    }

    return (
        <>
            <button type="button" onClick={toggle} className="absolute bottom-2 right-2">
                Dev
            </button>
            {open && createPortal(
                <>
                    <Backdrop className="bg-black/20 dark:bg-black/30" onClick={toggle} />
                    <div className={cx(
                        "z-10",
                        "bg-[--background-color] shadow-2xl rounded",
                        "fixed right-2 top-1/2 -translate-y-1/2",
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
    const playerPoints = useRecoilValue(playerPointsAtomFamily(activePlayerId.value))
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
