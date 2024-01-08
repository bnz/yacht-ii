import { computed } from "@preact/signals-react"
import { playersData } from "@signals/players/playersData"
import { editingInProgress } from "@signals/editingInProgress"

export const startGameButtonDisabled = computed(function () {
    return playersData.value.length <= 0 || editingInProgress.value
})
