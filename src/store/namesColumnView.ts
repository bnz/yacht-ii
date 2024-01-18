import { builder } from "@helpers/localStorage"
import { players } from "@store/players/players"

export const enum NamesColumnViewEnum {
    "text",
    "preview",
}

type NamesColumnView = Record<string, NamesColumnViewEnum>

export const {
    signal: namesColumnView,
    update,
} = builder<NamesColumnView>("namesColumnView", {})

export function resetNamesColumnView() {
    update({})
}

export function toggleActivePlayerNamesColumnView(): void {

    if (!namesColumnView.value[players.activeId]) {
        namesColumnView.value = {
            ...namesColumnView.value,
            [players.activeId]: NamesColumnViewEnum.text,
        }
    }

    namesColumnView.value[players.activeId] = namesColumnView.value[players.activeId] === NamesColumnViewEnum.text
        ? NamesColumnViewEnum.preview
        : NamesColumnViewEnum.text

    update({ ...namesColumnView.value })
}
