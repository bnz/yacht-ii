import { computed } from "@preact/signals-react"
import { childPlay } from "@store/childPlay"
import { childCombinations, combinationsData } from "@components/Combinations/combinationsData"
import { players as playersData } from "@store/players/players"

export const isEndOfGame = computed(function () {
    const players = playersData.data
    const { id: lastPlayerId } = players[players.length - 1]
    const points = playersData.points.get(lastPlayerId)
    return Object.keys(childPlay.value ? childCombinations : combinationsData).length === Object.keys(points).length
})
