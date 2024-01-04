import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState } from "@helpers/localStorage"

export const drawer = signal(restoreState<boolean>("drawer-state", false))

export function toggle(): void {
    drawer.value = !drawer.value
}

export function update(value: boolean) {
    drawer.value = value
}

effect(function () {
    saveState("drawer-state", drawer.value)
})
