import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState } from "@helpers/localStorage"

export type PlayerMove = [playerId: string, shot: number]

export const playerMove = signal<PlayerMove>(restoreState("player-move-", ["", 0]))

export function update(value: PlayerMove) {
    playerMove.value = value
}

effect(function () {
    saveState("player-move-", playerMove.value)
})
