import { useSetRecoilState } from "recoil"
import { resetPlayers } from "../../recoil/atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { useCallback } from "react"
import { GamePhases, update } from "@signals/gamePhase"

export function CancelButton() {
    const playersReset = useSetRecoilState(resetPlayers)
    const onClick = useCallback(function () {
        update(GamePhases.PRE_GAME)
        playersReset(null)
    }, [playersReset])

    return (
        <ButtonWithIcon
            icon="back"
            className="!py-5 absolute left-3 md:left-0 top-1/2 -translate-y-1/2 !bg-transparent !shadow-none"
            onClick={onClick}
        />
    )
}
