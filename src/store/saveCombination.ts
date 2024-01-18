import { BONUS_CONDITION, BONUS_POINTS, Combination } from "@components/Combinations/combinationsData"
import { players } from "@store/players/players"
import { activePlayerPoints, Points, updateActivePlayerPoints } from "@store/playerPoints"
import { updateDicesSelected } from "@store/dicesSelected"
import { resetDices } from "@store/dices"
import { updateActivePlayerHistoryResult } from "@store/history"

interface Props {
    combination: Combination
    points?: number
}

function calcBonus(points: Points): number {
    const bonus = Object.keys(points).reduce(function (prev, curr) {
        return isNaN(parseInt(curr, 10)) ? prev : prev + points[curr as Combination]!
    }, 0)

    return bonus >= BONUS_CONDITION ? BONUS_POINTS : (BONUS_CONDITION - bonus) * -1
}

export function saveCombination({ combination, points }: Props) {
    const playerPoints = { ...activePlayerPoints.value }
    playerPoints[combination] = points
    playerPoints[Combination.BONUS] = calcBonus(playerPoints)
    updateActivePlayerPoints(playerPoints)
    players.nextTurn()
    resetDices()
    updateDicesSelected([])
    updateActivePlayerHistoryResult({ combination, points })
    window.scrollTo({ top: 0, behavior: "smooth" })
}
