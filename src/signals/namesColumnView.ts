import { effect, signal } from "@preact/signals-react"
import { restoreState, saveState, storageKeys } from "@helpers/localStorage"
import { activePlayerId } from "@signals/players/activePlayerId"

export const enum NamesColumnViewEnum {
    "text",
    "preview",
}

type NamesColumnView = Record<string, NamesColumnViewEnum>

export const namesColumnView = signal<NamesColumnView>(restoreState<NamesColumnView>(storageKeys.namesColumnView, {}))

effect(function () {
    saveState(storageKeys.namesColumnView, namesColumnView.value)
})

export function resetNamesColumnView() {
    namesColumnView.value = {}
}

export function toggleActivePlayerNamesColumnView(): void {

    if (!namesColumnView.value[activePlayerId.value]) {
        namesColumnView.value = {
            ...namesColumnView.value,
            [activePlayerId.value]: NamesColumnViewEnum.text,
        }
    }

    namesColumnView.value[activePlayerId.value] = namesColumnView.value[activePlayerId.value] === NamesColumnViewEnum.text
        ? NamesColumnViewEnum.preview
        : NamesColumnViewEnum.text

    namesColumnView.value = { ...namesColumnView.value }
}
