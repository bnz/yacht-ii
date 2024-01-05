import { computed } from "@preact/signals-react"
import { activePlayerId } from "@signals/players/activePlayerId"
import { namesColumnView } from "@signals/namesColumnView"

export const activePlayerNamesColumnView = computed(function () {
    return namesColumnView.value[activePlayerId.value]
})
