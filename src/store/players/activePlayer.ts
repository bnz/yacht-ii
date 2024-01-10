import { computed } from "@preact/signals-react"
import { PlayerData, players } from "@store/players/players"
import { activePlayerId } from "@store/players/activePlayerId"

export const activePlayer = computed<PlayerData>(function () {
    return players.value[activePlayerId.value]
})
