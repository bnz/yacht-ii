import { computed } from "@preact/signals-react"
import { players } from "@store/players/players"
import { editingInProgress } from "@store/editingInProgress"

export const startGameButtonDisabled = computed(function () {
    return players.data.length <= 0 || editingInProgress.value
})
