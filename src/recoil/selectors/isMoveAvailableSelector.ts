import { selector } from "recoil"
import { playerMoveAtom } from "../atoms/players/playerMove"
import { Combination, combinationsData } from "../../components/Combinations/combinationsData"
import { checkMatch } from "../../helpers/checkMatch"
import { dicesAtom, MAX_SHOT_COUNT, playerPointsAtomFamily } from "../atoms"

export const isMoveAvailableSelector = selector<boolean>({
    key: "isMoveAvailableSelector",
    get({ get }) {
        const [activePlayerId, shot] = get(playerMoveAtom)
        const playerPoints = get(playerPointsAtomFamily(activePlayerId))
        const dices = get(dicesAtom)

        let matchesCount = 0
        let noMoves = false

        combinationsData.forEach(({ combination }) => {
            const { points } = checkMatch(combination, dices)
            const isInPlayerPoints = combination !== Combination.BONUS && playerPoints && !!playerPoints[combination]

            /**
             * Combination matched AND player hasn't this combination
             */
            if (points !== undefined && !isInPlayerPoints) {
                matchesCount = matchesCount + 1
            }

            /**
             * If no matches, no more shots and player already have this combination
             */
            if (points === undefined && shot === MAX_SHOT_COUNT) {
                noMoves = true
            }
        })

        return !(matchesCount === 0 && noMoves)
    },
})
