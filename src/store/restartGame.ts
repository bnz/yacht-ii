import { resetDices } from "@store/dices"
import { updateDicesSelected } from "@store/dicesSelected"
import { resetPlayerMove } from "@store/players/playerMove"
import { GamePhases, updateGamePhase } from "@store/gamePhase"
import { updateChildPlay } from "@store/childPlay"
import { resetPlayers } from "@store/players/resetPlayers"
import { updateHistory } from "@store/history"
import { updatePlayerPoints } from "@store/playerPoints"
import { resetNamesColumnView } from "@store/namesColumnView"
import { updatePlayers } from "@store/players/players"
import { updatePlayersIds } from "@store/players/playersIds"
import { updateMatchedView } from "@store/matchedView"

export function restartGame() {
    resetDices()
    updateDicesSelected([])
    resetPlayerMove()
    updateGamePhase(GamePhases.PRE_GAME)
    updateChildPlay(false)
    resetPlayers()
    updateHistory({})
    updatePlayerPoints({})
    resetNamesColumnView()
    updatePlayers({})
    updatePlayersIds([])
    updateMatchedView({})
}
