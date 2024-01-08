import { playersIds, updatePlayersIds } from "@signals/players/playersIds"
import { Players, players, updatePlayers } from "@signals/players/players"

export function removePlayer(id: string): void {
    const playersArray = [...playersIds.value]
    const index = playersArray.indexOf(id)
    if (index !== -1) {
        playersArray.splice(index, 1)
        updatePlayersIds(playersArray)
    }

    const allPlayers = JSON.parse(JSON.stringify(players.value)) as Players
    delete allPlayers[id]
    updatePlayers(allPlayers)
}