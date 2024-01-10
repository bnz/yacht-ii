import { builder } from "@helpers/localStorage"
import { activePlayerId } from "@store/players/activePlayerId"

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

    if (!namesColumnView.value[activePlayerId.value]) {
        namesColumnView.value = {
            ...namesColumnView.value,
            [activePlayerId.value]: NamesColumnViewEnum.text,
        }
    }

    namesColumnView.value[activePlayerId.value] = namesColumnView.value[activePlayerId.value] === NamesColumnViewEnum.text
        ? NamesColumnViewEnum.preview
        : NamesColumnViewEnum.text

    update({ ...namesColumnView.value })
}
