import { computed } from "@preact/signals-react"
import { MAX_SHOT_COUNT } from "../../recoil/atoms"
import { playerMove } from "@store/players/playerMove"

export const isShotAvailable = computed<boolean>(function () {
    return playerMove.value[1] >= MAX_SHOT_COUNT
})
