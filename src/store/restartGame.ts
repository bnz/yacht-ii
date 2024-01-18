import { resetDices } from "@store/dices"
import { updateDicesSelected } from "@store/dicesSelected"
import { GamePhases, updateGamePhase } from "@store/gamePhase"
import { updateChildPlay } from "@store/childPlay"
import { updateHistory } from "@store/history"
import { updatePlayerPoints } from "@store/playerPoints"
import { resetNamesColumnView } from "@store/namesColumnView"
import { players } from "@store/players/players"
import { matchedView } from "@store/matchedView"

export function restartGame() {
    resetDices()
    updateDicesSelected([])
    updateGamePhase(GamePhases.PRE_GAME)
    updateChildPlay(false)
    updateHistory({})
    updatePlayerPoints({})
    resetNamesColumnView()

    players.reset()
    matchedView.reset()
}
