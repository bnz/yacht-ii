import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState, storageKeys } from "@helpers/localStorage"

export const childPlay = signal(restoreState<boolean>(storageKeys.childPlay, false))

export function updateChildPlay(value: boolean) {
    childPlay.value = value
}

effect(function () {
    saveState(storageKeys.childPlay, childPlay.value)
})
