import { effect, signal } from "@preact/signals-react"
import { AvatarEnum } from "../../recoil/atoms"
import { restoreState, saveState, storageKeys } from "@helpers/localStorage"

export interface PlayerData {
    name: string
    avatar: AvatarEnum
}

export type Players = Record<string, PlayerData>

export const players = signal(restoreState<Players>(storageKeys.players, {}))

export function updatePlayers(value: Players): void {
    players.value = value
}

effect(function (): void {
    saveState(storageKeys.players, players.value)
})
