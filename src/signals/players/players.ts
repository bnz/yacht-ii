import { effect, signal } from "@preact/signals-react"
import { AvatarEnum } from "../../recoil/atoms"
import { restoreState, saveState } from "@helpers/localStorage"

export interface PlayerData {
    name: string
    avatar: AvatarEnum
}

export type Players = Record<string, PlayerData>

export const players = signal(restoreState<Players>("players-", {}))

export function updatePlayers(value: Players): void {
    players.value = value
}

effect(function (): void {
    saveState("players-", players.value)
})
