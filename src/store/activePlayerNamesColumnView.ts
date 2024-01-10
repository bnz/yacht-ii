import { computed } from "@preact/signals-react"
import { activePlayerId } from "@store/players/activePlayerId"
import { namesColumnView, NamesColumnViewEnum } from "@store/namesColumnView"

export const activePlayerNamesColumnView = computed(function () {
    return namesColumnView.value[activePlayerId.value] || NamesColumnViewEnum.text
})
