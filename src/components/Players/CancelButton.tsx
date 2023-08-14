import type { FC } from "react"
import { useSetRecoilState } from "recoil"
import { gamePhase, GamePhases, resetPlayers } from "../../recoil/atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { useCallback } from "react"

export const CancelButton: FC = () => {
    const setPhase = useSetRecoilState(gamePhase)
    const playersReset = useSetRecoilState(resetPlayers)
    const onClick = useCallback(() => {
        setPhase(GamePhases.PRE_GAME)
        playersReset(null)
    }, [setPhase, playersReset])

    return (
        <ButtonWithIcon
            icon="back"
            className="!py-5 absolute left-3 top-1/2 -translate-y-1/2 !bg-transparent !shadow-none"
            onClick={onClick}
        />
    )
}
