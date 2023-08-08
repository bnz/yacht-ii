import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { PlayersList } from "../Players/PlayersList"
import { AddPlayer } from "../Players/AddPlayer"
import { StartGameButton } from "../StartGameButton"
import { gamePhase, GamePhases } from "../../atoms"
import { useSetRecoilState } from "recoil"

export const Players: FC = () => {
    const setPhase = useSetRecoilState(gamePhase)

    return (
        <div className="lg:w-1/2 mx-auto">
            <h3 className="text-center mb-5 font-bold">
                {i18n("playersHeader")}
            </h3>
            <PlayersList />
            <div className="flex flex-col md:flex-row gap-5">
                <StartGameButton />
                <button type="button" onClick={() => setPhase(GamePhases.PRE_GAME)}>
                    {i18n('button.cancel')}
                </button>
                <AddPlayer />
            </div>
        </div>
    )
}
