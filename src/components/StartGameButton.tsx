import type { FC } from "react"
import { gamePhase, GamePhases, playersData } from "../atoms"
import { i18n } from "../helpers/i18n/i18n"
import { useRecoilValue, useSetRecoilState } from "recoil"

export const StartGameButton: FC = () => {
    const setPhase = useSetRecoilState(gamePhase)
    const players = useRecoilValue(playersData)

    console.log(players)

    return (
        <button type="button" onClick={() => setPhase(GamePhases.IN_PLAY)} disabled={players.length <= 0}>
            {i18n('button.startGame')}
        </button>
    )
}
