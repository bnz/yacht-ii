import type { FC } from "react"
import { Wrapper } from "./components/Wrapper"
import { Drawer } from "./components/Drawer"
import { Rules } from "./components/Rules"
import { useRecoilState } from "recoil"
import { gamePhase, GamePhases } from "./atoms"
import { i18n } from "./helpers/i18n/i18n"

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
                            <div>list of players</div>
                            <button type="button" onClick={() => setPhase(GamePhases.IN_PLAY)}>
                                {i18n('button.startGame')}
                            </button>
                            <div>AddPlayer</div>
                            <button type="button" onClick={() => setPhase(GamePhases.PRE_GAME)}>
                                {i18n('button.cancel')}
                            </button>
                            <div>ResetToDefaultPlayersButton</div>
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
