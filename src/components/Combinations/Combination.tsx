import type { FC } from "react"
import { Combination as CombinationType, EMPTY_CELL, isBonus as _isBonus } from "./combinationsData"
import { useRecoilValue } from "recoil"
import { dicesAtom, playerMoveAtom, playerPointsAtomFamily } from "../../atoms"
import { checkMatch } from "../../helpers/checkMatch"
import cx from "classnames"
import { Points } from "../Points"

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

    // console.log({
    //     type,
    //     existingCombination,
    //     points,
    //     maxPoints,
    //     save() {
    //     },
    //     strikeOut() {
    //     },
    // })

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
    }

    return (
        <>
            {`${isMoveAvailable}`}
        </>
    )
}
