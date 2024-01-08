import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState, storageKeys } from "@helpers/localStorage"

export type PlayerMove = [playerId: string, shot: number]

const defaultValue: PlayerMove = ["", 0]

export const playerMove = signal<PlayerMove>(restoreState(storageKeys.playerMove, defaultValue))

type Callback = (value: PlayerMove) => PlayerMove

export function updatePlayerMove(value: PlayerMove): void
export function updatePlayerMove(value: Callback): void
export function updatePlayerMove(value: PlayerMove | Callback): void {
    playerMove.value = typeof value === "function" ? value(playerMove.value) : value
}

export function resetPlayerMove() {
    playerMove.value = defaultValue
}

effect(function () {
    saveState(storageKeys.playerMove, playerMove.value)
})
