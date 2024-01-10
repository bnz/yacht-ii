import { computed } from "@preact/signals-react"
import { playersData } from "@store/players/playersData"
import { getPlayerPoints } from "@store/playerPoints"
import { childPlay } from "@store/childPlay"
import { childCombinations, combinationsData } from "@components/Combinations/combinationsData"

export const isEndOfGame = computed(function () {
    const players = playersData.value
    const { id: lastPlayerId } = players[players.length - 1]
    const points = getPlayerPoints(lastPlayerId)
    return Object.keys(childPlay.value ? childCombinations : combinationsData).length === Object.keys(points).length
})
