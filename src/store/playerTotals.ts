import { computed } from "@preact/signals-react"
import { getPlayerPoints } from "@store/playerPoints"
import { Combination } from "@components/Combinations/combinationsData"
import { players } from "@store/players/players"

type PlayersTotals = {
    [playerId: string]: number
}

export const playerTotals = computed(function () {
    const totals: PlayersTotals = {}

    players.data.forEach(function ({ id: playerId }) {
        const points = getPlayerPoints(playerId)
        totals[playerId] = Object.keys(points).reduce(function (prev, key) {
            const curr = points[key as Combination]!
            if (key === Combination.BONUS && Math.sign(curr) === -1) {
                return prev
            }
            return prev + curr
        }, 0)
    })
    return totals
})
