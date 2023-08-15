import type { FC } from "react"
import { Drawer } from "./components/Drawer/Drawer"
import { useRecoilValue } from "recoil"
import { gamePhase, GamePhases } from "./recoil/atoms"
import { PreGame } from "./components/Sections/PreGame"
import { Players } from "./components/Sections/Players"
import { InPlay } from "./components/Sections/InPlay"

const phases = {
    [GamePhases.PRE_GAME]: PreGame,
    [GamePhases.PLAYERS_SELECTION]: Players,
    [GamePhases.IN_PLAY]: InPlay,
}

export const App: FC = () => {
    const GamePhase = phases[useRecoilValue(gamePhase)]

    return (
        <>
            <GamePhase />
            <Drawer />
        </>
    )
}
