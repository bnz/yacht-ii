import { computed } from "@preact/signals-react"
import { playerMove } from "@signals/players/playerMove"

export const activePlayerId = computed<string>(function () {
    return playerMove.value[0]
})
