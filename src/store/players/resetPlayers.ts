import { updatePlayers } from "@store/players/players"
import { updatePlayersIds } from "@store/players/playersIds"
import { resetPlayerMove } from "@store/players/playerMove"

export function resetPlayers() {
    updatePlayers({})
    updatePlayersIds([])
    resetPlayerMove()
}
