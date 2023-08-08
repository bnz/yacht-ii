import type { FC } from "react"
import { playersData, startGameSelector } from "../atoms"
import { i18n } from "../helpers/i18n/i18n"
import { useRecoilValue, useSetRecoilState } from "recoil"

export const StartGameButton: FC = () => {
    const players = useRecoilValue(playersData)
    const startGame = useSetRecoilState(startGameSelector)

    return (
        <button type="button" disabled={players.length <= 0} onClick={() => startGame(true)}>
            {i18n('button.startGame')}
        </button>
    )
}
