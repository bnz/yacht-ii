import { builder } from "@helpers/localStorage"
import { Combination } from "@components/Combinations/combinationsData"
import { computed } from "@preact/signals-react"
import { activePlayerId } from "@store/players/activePlayerId"

export type Points = {
    [key in Combination]?: number
}

type Players = Record<string, Points>

export const {
    signal: playerPoints,
    update: updatePlayerPoints,
} = builder<Players>("playerPoints", {})

export function updateActivePlayerPoints(points: Points) {
    const copy = JSON.parse(JSON.stringify(playerPoints.value)) as Players
    copy[activePlayerId.value] = points
    updatePlayerPoints(copy)
}

export function getPlayerPoints(playerId: string) {
    return playerPoints.value[playerId] || {}
}

export const activePlayerPoints = computed(function () {
    return playerPoints.value[activePlayerId.value] || {}
})
