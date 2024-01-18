import { computed } from "@preact/signals-react"
import { namesColumnView, NamesColumnViewEnum } from "@store/namesColumnView"
import { players } from "@store/players/players"

export const activePlayerNamesColumnView = computed(function () {
    return namesColumnView.value[players.activeId] || NamesColumnViewEnum.text
})
