import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState } from "@helpers/localStorage"

export const childPlay = signal(restoreState<boolean>("child-play", false))

export function update(value: boolean) {
    childPlay.value = value
}

effect(function () {
    saveState("child-play", childPlay.value)
})
