import { ButtonWithIcon } from "../ButtonWithIcon"
import { useCallback } from "react"
import { GamePhases, updateGamePhase } from "@store/gamePhase"
import { players } from "@store/players/players"

export function CancelButton() {
    return (
        <ButtonWithIcon
            icon="back"
            className="!py-5 absolute left-3 md:left-0 top-1/2 -translate-y-1/2 !bg-transparent !shadow-none"
            onClick={useCallback(function () {
                updateGamePhase(GamePhases.PRE_GAME)
                players.reset()
            }, [])}
        />
    )
}
