import { computed } from "@preact/signals-react"
import { playersData } from "@store/players/playersData"
import { editingInProgress } from "@store/editingInProgress"

export const startGameButtonDisabled = computed(function () {
    return playersData.value.length <= 0 || editingInProgress.value
})
