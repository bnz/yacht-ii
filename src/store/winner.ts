import { computed } from "@preact/signals-react"
import { isEndOfGame } from "@store/isEndOfGame"
import { players } from "@store/players/players"

export const winner = computed(function () {
    if (isEndOfGame.value) {
        const playerKeys = Object.keys(players.points.totals)
        const max = Math.max(...playerKeys.map(function (key) {
            return players.points.totals[key]
        }))
        const index = playerKeys.findIndex(function (key) {
            return players.points.totals[key] === max
        })
        const { data: { name, avatar } } = players.data[index]
        return {
            name,
            avatar,
            total: max,
        }
    }
    return null
})
