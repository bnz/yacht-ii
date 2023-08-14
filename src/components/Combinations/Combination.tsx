import type { FC } from "react"
import { Combination as CombinationType, EMPTY_CELL, isBonus as _isBonus } from "./combinationsData"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
    dicesAtom,
    playerMoveAtom,
    playerPointsAtomFamily,
} from "../../recoil/atoms"
import { saveCombinationSelector } from "../../recoil/selectors/saveCombinationSelector"
import { checkMatch } from "../../helpers/checkMatch"
import cx from "classnames"
import { Points } from "../Points"
import { i18n } from "../../helpers/i18n/i18n"
import { defineWorkEnding } from "../../helpers/defineWorkEnding"
import { useCallback } from "react"

interface CombinationProps {
    playerId: string
    combination: CombinationType
    isMoveAvailable: boolean
}

export const Combination: FC<CombinationProps> = ({
    playerId,
    combination,
    isMoveAvailable,
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

    const saveCombination = useSetRecoilState(saveCombinationSelector)
    const save = useCallback(() => {
        saveCombination({ playerId, combination, points })
    }, [saveCombination, playerId, combination, points])

    switch (type) {
        case "matching":
            return (
                <button type="button" onClick={save} data-empty={true} className="w-full">
                    <Points
                        points={points}
                        maxPoints={maxPoints}
                    />
                </button>
            )
        case "matched":
            return (
                <div className="text-2xl font-thin">
                    {existingCombination}
                </div>
            )
        case "bonus": {
            // const { bonus, isNegative } = renderBonus(existingCombination as number)
            const combinationAsNumber = existingCombination as number

            const isNegative = Math.sign(combinationAsNumber) === -1

            const bonus = isNegative
                ? `${i18n('more')} ${combinationAsNumber * -1} ${defineWorkEnding(combinationAsNumber)}`
                : combinationAsNumber

            console.log({ bonus })

            return (
                <div>{bonus}</div>
            )
        }
        case "strike": {
            return (
                <div>
                    {i18n('button.strikeOut')}
                </div>
            )
        }
        default: {
            return (
                <div className="text-[var(--line-color)]">{EMPTY_CELL}</div>
            )
        }
    }
}
