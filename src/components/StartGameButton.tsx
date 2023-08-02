import type { FC } from "react"
import { gamePhase, GamePhases, playerMoveAtom, playersData } from "../atoms"
import { i18n } from "../helpers/i18n/i18n"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const StartGameButton: FC = () => {
    const [playerMove, setPlayerMove] = useRecoilState(playerMoveAtom)
    const setPhase = useSetRecoilState(gamePhase)
    const players = useRecoilValue(playersData)

    const onClick = () => {
        let { 0: playerId } = playerMove

        if (!playerId) {
            playerId = players[0].id
        } else {
            const index = players.findIndex(({ id }) => id === playerId)
            const player = players[index + 1]
            playerId = player ? player.id : players[0].id
        }

        setPlayerMove([playerId, 0])
        setPhase(GamePhases.IN_PLAY)
    }

    return (
        <button type="button" disabled={players.length <= 0} onClick={onClick}>
            {i18n('button.startGame')}
        </button>
    )
}
