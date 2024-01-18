import { dices } from "@store/dices"
import { GamePhases, updateGamePhase } from "@store/gamePhase"
import { updateChildPlay } from "@store/childPlay"
import { updateHistory } from "@store/history"
import { players } from "@store/players/players"
import { matchedView } from "@store/matchedView"

export function restartGame() {
    dices.reset()
    dices.selected.reset()
    updateGamePhase(GamePhases.PRE_GAME)
    updateChildPlay(false)
    updateHistory({})
    players.points.reset()
    players.columnView.reset()

    players.reset()
    matchedView.reset()
}
