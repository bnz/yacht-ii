import { computed } from "@preact/signals-react"
import { activePlayerPoints } from "@store/playerPoints"
import { Combination, combinationsData } from "@components/Combinations/combinationsData"
import { checkMatch } from "@helpers/checkMatch"
import { dices } from "@store/dices"
import { childPlay } from "@store/childPlay"
import { activePlayerShot } from "@store/players/activePlayerShot"
import { MAX_SHOT_COUNT } from "../recoil/atoms"

export const isMoveAvailable = computed(function () {
    const playerPoints = activePlayerPoints.value

    let matchesCount = 0
    let noMoves = false

    combinationsData.forEach(function ({ combination }) {
        const { points } = checkMatch(combination, dices.value, childPlay.value)
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

})
