import { Combination as CombinationType, EMPTY_CELL, isBonus as _isBonus } from "./combinationsData"
import { saveCombination } from "@store/saveCombination"
import { checkMatch } from "@helpers/checkMatch"
import cx from "classnames"
import { Points } from "../Points"
import { i18n } from "@helpers/i18n"
import { defineWorkEnding } from "@helpers/defineWorkEnding"
import { useCallback } from "react"
import { CombinationButton } from "./CombinationButton"
import { CombinationMatched } from "./CombinationMatched"
import { childPlay } from "@store/childPlay"
import { dices } from "@store/dices"
import { players } from "@store/players/players"

interface CombinationProps {
    playerId: string
    combination: CombinationType
    isMoveAvailable: boolean
    className: string
}

export function Combination({ playerId, combination, isMoveAvailable, className }: CombinationProps) {
    const { points, maxPoints } = checkMatch(combination, dices.value, childPlay.value)
    const playerPoints = players.points.get(playerId)
    const existingCombination = (playerPoints || [])[combination] as number === undefined
        ? EMPTY_CELL
        : (playerPoints || [])[combination] as number
    const active = players.activeId === playerId
    const isBonus = _isBonus(combination)
    const matched = existingCombination !== EMPTY_CELL && !isBonus

    const type = cx({
        matched,
        matching: active && !matched && points !== undefined && points > 0,
        bonus: isBonus && existingCombination !== EMPTY_CELL,
        strike: active && !matched && !isBonus && !isMoveAvailable,
    })

    const save = useCallback(function () {
        saveCombination({ combination, points })
    }, [combination, points])

    const strikeOut = useCallback(function () {
        saveCombination({ combination, points: 0 })
    }, [combination])

    const classes = cx(className,
        // active && "border-l border-r"
    )
    const shadowClasses = cx("bg-[--background-color-active]")

    switch (type) {
        case "matching":
            return (
                <CombinationButton
                    onClick={save}
                    buttonClassName={cx(classes, shadowClasses)}
                    innerClassName="bg-blue-200 dark:bg-blue-950"
                >
                    <Points
                        points={points}
                        maxPoints={maxPoints}
                    />
                </CombinationButton>
            )
        case "matched":
            return (
                <CombinationMatched
                    playerId={playerId}
                    combination={combination}
                    className={cx(classes, active && shadowClasses)}
                />
            )
        case "bonus": {
            const combinationAsNumber = existingCombination as number
            const isNegative = Math.sign(combinationAsNumber) === -1
            const bonus = isNegative
                ? `${i18n('more')} ${combinationAsNumber * -1} ${defineWorkEnding(combinationAsNumber * -1)}`
                : combinationAsNumber

            return (
                <div className={cx(
                    classes,
                    isNegative ? "text-[rgba(0,0,0,.4)] dark:text-[rgba(255,255,255,.25)]" : "not-italic",
                )}>
                    {bonus}
                </div>
            )
        }
        case "strike": {
            return (
                <button type="button" data-empty={true} className={classes} onClick={strikeOut}>
                    <div className={cx(
                        "animate-pulse shadow-2xl flex justify-center items-center h-12 mx-1",
                        "bg-red-200 dark:bg-red-950 rounded",
                    )}>
                        {i18n('button.strikeOut')}
                    </div>
                </button>
            )
        }
        default: {
            return (
                <div className={cx(classes, "text-[--line-color]", active && shadowClasses)}>
                    {EMPTY_CELL}
                </div>
            )
        }
    }
}
