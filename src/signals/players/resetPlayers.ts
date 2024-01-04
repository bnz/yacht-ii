import { updatePlayers } from "@signals/players/players"
import { updatePlayersIds } from "@signals/players/playersIds"
import { resetPlayerMove } from "@signals/players/playerMove"

export function resetPlayers() {
    updatePlayers({})
    updatePlayersIds([])
    resetPlayerMove()
}
