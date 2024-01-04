import { playersData } from "@signals/players/playersData"
import { activePlayerId } from "@signals/players/activePlayerId"
import { updatePlayerMove } from "@signals/players/playerMove"

export function nextTurn() {
    const players = playersData.value
    let playerId = activePlayerId.value

    if (!playerId) {
        playerId = players[0].id
    } else {
        const index = players.findIndex(function ({ id }) {
            return id === playerId
        })
        const player = players[index + 1]
        playerId = player ? player.id : players[0].id
    }
    updatePlayerMove([playerId, 0])
}
