import { computed } from "@preact/signals-react"
import { isEndOfGame } from "@store/isEndOfGame"
import { playersData } from "@store/players/playersData"
import { playerTotals } from "@store/playerTotals"

export const winner = computed(function () {
    if (isEndOfGame.value) {
        const players = playersData.value
        const playerKeys = Object.keys(playerTotals.value)
        const max = Math.max(...playerKeys.map(function (key) {
            return playerTotals.value[key]
        }))
        const index = playerKeys.findIndex(function (key) {
            return playerTotals.value[key] === max
        })
        const { data: { name, avatar } } = players[index]
        return {
            name,
            avatar,
            total: max,
        }
    }
    return null
})
