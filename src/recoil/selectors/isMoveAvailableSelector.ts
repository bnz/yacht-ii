import { selector } from "recoil"
import { Combination, combinationsData } from "@components/Combinations/combinationsData"
import { checkMatch } from "@helpers/checkMatch"
import { dicesAtom, MAX_SHOT_COUNT, playerPointsAtomFamily } from "../atoms"
import { childPlay } from "@signals/childPlay"
import { activePlayerId } from "@signals/players/activePlayerId"
import { activePlayerShot } from "@signals/players/activePlayerShot"

export const isMoveAvailableSelector = selector<boolean>({
    key: "isMoveAvailableSelector",
    get({ get }) {
        const playerPoints = get(playerPointsAtomFamily(activePlayerId.value))
        const dices = get(dicesAtom)

        let matchesCount = 0
        let noMoves = false

        combinationsData.forEach(function ({ combination }) {
            const { points } = checkMatch(combination, dices, childPlay.value)
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
            if (points === undefined && activePlayerShot.value === MAX_SHOT_COUNT) {
                noMoves = true
            }
        })

        return !(matchesCount === 0 && noMoves)
    },
})
