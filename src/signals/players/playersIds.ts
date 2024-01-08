import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState, storageKeys } from "@helpers/localStorage"

export const playersIds = signal<string[]>(restoreState<string[]>(storageKeys.playersIds, []))

export function updatePlayersIds(value: string[]) {
    playersIds.value = value
}

effect(function () {
    saveState(storageKeys.playersIds, playersIds.value)
})
