import { computed } from "@preact/signals-react"
import { PlayerData, players } from "@signals/players/players"
import { activePlayerId } from "@signals/players/activePlayerId"

export const activePlayer = computed<PlayerData>(function () {
    return players.value[activePlayerId.value]
})
