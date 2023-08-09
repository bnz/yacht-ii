import type { FC } from "react"
import { Combination as CombinationType, EMPTY_CELL, isBonus as _isBonus } from "./combinationsData"
import { useRecoilValue } from "recoil"
import { dicesAtom, playerMoveAtom, playerPointsAtomFamily } from "../../atoms"
import { checkMatch } from "../../helpers/checkMatch"
import cx from "classnames"
import { Points } from "../Points"
import { i18n } from "../../helpers/i18n/i18n"

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
    const existingCombination = (playerPoints || [])[combination] as number === undefined ? EMPTY_CELL : (playerPoints || [])[combination] as number
    const active = activePlayerId === playerId
    const isBonus = _isBonus(combination)
    const matched = existingCombination !== EMPTY_CELL && !isBonus

    const type = cx({
        matched,
        matching: active && !matched && points !== undefined && points > 0,
        bonus: isBonus && existingCombination !== EMPTY_CELL,
        strike: active && !matched && !isBonus && !isMoveAvailable,
    })

    switch (type) {
        case "matching":
            return (
                <button type="button">
                    <Points
                        points={points}
                        maxPoints={maxPoints}
                    />
                </button>
            )
        case "matched":
            return (
                <div>
                    {existingCombination}
                </div>
            )
        case "bonus": {
            return (
                <div>bonus</div>
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
                <div>{EMPTY_CELL}</div>
            )
        }
    }
}
