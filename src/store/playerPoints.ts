import { builder } from "@helpers/localStorage"
import { Combination } from "@components/Combinations/combinationsData"
import { computed } from "@preact/signals-react"
import { players } from "@store/players/players"
import { createCopy } from "@helpers/createCopy"

export type Points = {
    [key in Combination]?: number
}

type Players = Record<string, Points>

export const {
    signal: playerPoints,
    update: updatePlayerPoints,
} = builder<Players>("playerPoints", {})

export function updateActivePlayerPoints(points: Points) {
    const copy = createCopy(playerPoints.value)
    copy[players.activeId] = points
    updatePlayerPoints(copy)
}

export function getPlayerPoints(playerId: string) {
    return playerPoints.value[playerId] || {}
}

export const activePlayerPoints = computed(function () {
    return playerPoints.value[players.activeId] || {}
})
