import { BONUS_CONDITION, BONUS_POINTS, Combination } from "@components/Combinations/combinationsData"
import { players } from "@store/players/players"
import { dices } from "@store/dices"
import { history } from "@store/history"
import { createCopy } from "@helpers/createCopy"
import { Points } from "@store/types"

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
    history.updateActivePlayerResult({ combination, points })

    const playerPoints = createCopy(players.points.active)
    playerPoints[combination] = points
    playerPoints[Combination.BONUS] = calcBonus(playerPoints)
    players.points.updateActive(playerPoints)

    players.nextTurn()
    dices.reset()
    dices.selected.reset()
    window.scrollTo({ top: 0, behavior: "smooth" })
}
