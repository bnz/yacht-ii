import type { FC } from "react"
import { Combination as CombinationType, EMPTY_CELL, isBonus as _isBonus } from "./combinationsData"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
    dicesAtom,
    playerPointsAtomFamily,
} from "../../recoil/atoms"
import { saveCombinationSelector } from "../../recoil/selectors/saveCombinationSelector"
import { checkMatch } from "../../helpers/checkMatch"
import cx from "classnames"
import { Points } from "../Points"
import { i18n } from "../../helpers/i18n/i18n"
import { defineWorkEnding } from "../../helpers/defineWorkEnding"
import { useCallback } from "react"
import { playerMoveAtom } from "../../recoil/atoms/players/playerMove"
import { CombinationButton } from "./CombinationButton"

interface CombinationProps {
    playerId: string
    combination: CombinationType
    isMoveAvailable: boolean
    className: string
}

export const Combination: FC<CombinationProps> = ({
    playerId,
    combination,
    isMoveAvailable,
    className,
}) => {
    const dices = useRecoilValue(dicesAtom)
    const [activePlayerId] = useRecoilValue(playerMoveAtom)
    const { points, maxPoints } = checkMatch(combination, dices)
    const playerPoints = useRecoilValue(playerPointsAtomFamily(playerId))
    const existingCombination = (playerPoints || [])[combination] as number === undefined
        ? EMPTY_CELL
        : (playerPoints || [])[combination] as number
    const active = activePlayerId === playerId
    const isBonus = _isBonus(combination)
    const matched = existingCombination !== EMPTY_CELL && !isBonus

    const type = cx({
        matched,
        matching: active && !matched && points !== undefined && points > 0,
        bonus: isBonus && existingCombination !== EMPTY_CELL,
        strike: active && !matched && !isBonus && !isMoveAvailable,
    })

    if (combination === "theYacht") {
        console.log({
                active,
                "!matched": !matched,
                "!isBonus": !isBonus,
                "!isMoveAvailable": !isMoveAvailable,
            },
            active && !matched && !isBonus && !isMoveAvailable,
            { type },
        )
    }

    const saveCombination = useSetRecoilState(saveCombinationSelector)
    const save = useCallback(() => {
        saveCombination({ playerId, combination, points })
    }, [saveCombination, playerId, combination, points])
    const strikeOut = useCallback(() => {
        saveCombination({ playerId, combination, points: 0 })
    }, [saveCombination, playerId, combination])

    const classes = cx(className, active && "border-l border-r")

    switch (type) {
        case "matching":
            return (
                <CombinationButton
                    onClick={save}
                    buttonClassName={classes}
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
                <div className={cx(classes, "text-2xl font-thin", active && "bg-[var(--background-color-active)]")}>
                    {existingCombination}
                </div>
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
                <div className={cx(
                    classes,
                    "text-[var(--line-color)]",
                    active && "bg-[var(--background-color-active)]",
                )}>
                    {EMPTY_CELL}
                </div>
            )
        }
    }
}
