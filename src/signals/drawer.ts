import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState, storageKeys } from "@helpers/localStorage"

export const drawer = signal(restoreState<boolean>(storageKeys.drawer, false))

effect(function () {
    saveState(storageKeys.drawer, drawer.value)
})

export function toggle(): void {
    drawer.value = !drawer.value
}

export function update(value: boolean) {
    drawer.value = value
}
