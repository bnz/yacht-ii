import type { FC } from "react"
import { Wrapper } from "./components/Wrapper"
import { Drawer } from "./components/Drawer/Drawer"
import { Rules } from "./components/Rules"
import { useRecoilState } from "recoil"
import { gamePhase, GamePhases } from "./atoms"
import { i18n } from "./helpers/i18n/i18n"
import { AddPlayer } from "./components/AddPlayer/AddPlayer"
import { PlayersList } from "./components/PlayersList/PlayersList"
import { StartGameButton } from "./components/StartGameButton"

export const App: FC = () => {
    const [phase, setPhase] = useRecoilState(gamePhase)

    return (
        <>
            <Wrapper>
                {{
                    [GamePhases.PRE_GAME]: (
                        <>
                            <div className="p-5">
                                <button type="button" onClick={() => setPhase(GamePhases.PLAYERS_SELECTION)}>
                                    {i18n('button.startNewGame')}
                                </button>
                            </div>
                            <Rules />
                        </>
                    ),
                    [GamePhases.PLAYERS_SELECTION]: (
                        <>
                            <PlayersList />
                            <StartGameButton />
                            <AddPlayer />
                            <button type="button" onClick={() => setPhase(GamePhases.PRE_GAME)}>
                                {i18n('button.cancel')}
                            </button>
                            <button type="button">
                                {i18n('button.reset2')}
                            </button>
                        </>
                    ),
                    [GamePhases.IN_PLAY]: (
                        <>IN_PLAY</>
                    ),
                }[phase]}
            </Wrapper>
            <Drawer />
        </>
    )
}
