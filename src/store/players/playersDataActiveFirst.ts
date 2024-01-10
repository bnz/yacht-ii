import { playersData } from "@store/players/playersData"
import { activePlayerFirst } from "@store/players/activePlayerFirst"
import { activePlayerId } from "@store/players/activePlayerId"
import { computed } from "@preact/signals-react"

export const playersDataActiveFirst = computed(function () {
    if (!activePlayerFirst.value) {
        return playersData.value
    }
    const players = [...playersData.value]
    const index = players.findIndex(function ({ id }) {
        return id === activePlayerId.value
    })
    const beforeArray = players.slice(0, index)
    const arr = players.splice(index, players.length)
    return [...arr, ...beforeArray]
})
