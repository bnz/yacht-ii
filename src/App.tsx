import type { FC } from "react"
import { Wrapper } from "./components/Wrapper"
import { Drawer } from "./components/Drawer/Drawer"
import { Rules } from "./components/Rules"
import { useRecoilCallback, useRecoilState } from "recoil"
import { gamePhase, GamePhases } from "./atoms"
import { i18n } from "./helpers/i18n/i18n"
import { AddPlayer } from "./components/Players/AddPlayer"
import { PlayersList } from "./components/Players/PlayersList"
import { StartGameButton } from "./components/StartGameButton"
import { Dices } from "./components/Dices/Dices"
import { DicesActions } from "./components/Dices/DicesActions"
import { Combinations } from "./components/Combinations/Combinations"

function DebugButton() {
    const onClick = useRecoilCallback(({ snapshot }) => async () => {
        console.debug("\n--- Atom values --- --- --- --- --- --- --- --- ---\n\n")
        for (const node of snapshot.getNodes_UNSTABLE()) {
            const value = await snapshot.getPromise(node)
            console.debug(node.key, value)
        }
        console.debug("\n--- --- --- --- --- --- --- --- --- --- --- --- ---\n\n\n")
    }, [])

    return <button className="border border-black px-3 ml-3 absolute right-1 top-1" onClick={onClick}>Dump
        State</button>
}

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
                        <div className="md:max-w-[50%]">
                            <PlayersList />
                            <div className="flex flex-col md:flex-row gap-5">
                                <AddPlayer />
                                <StartGameButton />
                                <button type="button" onClick={() => setPhase(GamePhases.PRE_GAME)}>
                                    {i18n('button.cancel')}
                                </button>
                            </div>
                        </div>
                    ),
                    [GamePhases.IN_PLAY]: (
                        <>
                            <Dices />
                            <DicesActions />
                            <Combinations />
                        </>
                    ),
                }[phase]}
            </Wrapper>
            <Drawer />
            <DebugButton />
        </>
    )
}
