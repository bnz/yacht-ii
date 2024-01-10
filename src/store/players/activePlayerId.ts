import { computed } from "@preact/signals-react"
import { playerMove } from "@store/players/playerMove"

export const activePlayerId = computed<string>(function () {
    return playerMove.value[0]
})
