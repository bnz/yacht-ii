import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState } from "@helpers/localStorage"

export const playersIds = signal<string[]>(restoreState<string[]>("players-ids", []))

export function updatePlayersIds(value: string[]) {
    playersIds.value = value
}

effect(function () {
    saveState("players-ids", playersIds.value)
})
