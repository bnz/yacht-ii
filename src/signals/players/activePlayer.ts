import { computed } from "@preact/signals-react"
import { playerMove } from "@signals/players/playerMove"
import { PlayerData, players } from "@signals/players/players"

export const activePlayer = computed<PlayerData>(function () {
    const [playerId] = playerMove.value
    return players.value[playerId]
})
