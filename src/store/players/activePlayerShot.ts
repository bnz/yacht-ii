import { computed } from "@preact/signals-react"
import { playerMove } from "@store/players/playerMove"

export const activePlayerShot = computed<number>(function () {
    return playerMove.value[1]
})
