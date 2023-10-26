import { Drawer } from "./components/Drawer/Drawer"
import { useRecoilValue } from "recoil"
import { gamePhase, GamePhases } from "./recoil/atoms"
import { lazy, Suspense } from 'react'
import { AppWrapper } from "./components/AppWrapper"
import { Spinner } from './components/Spinner';

const phases = {
    [GamePhases.PRE_GAME]: lazy(function () {
        return import("./components/Sections/PreGame")
    }),
    [GamePhases.PLAYERS_SELECTION]: lazy(function () {
        return import("./components/Sections/Players")
    }),
    [GamePhases.IN_PLAY]: lazy(function () {
        return import("./components/Sections/InPlay")
    }),
    [GamePhases.CHILD_PLAY]: lazy(function () {
        return import("./components/Sections/ChildPlay")
    })
}

export function App() {
    const GamePhase = phases[useRecoilValue(gamePhase)]

    return (
        <>
            <AppWrapper>
                <Suspense fallback={<Spinner />}>
                    <GamePhase />
                </Suspense>
            </AppWrapper>
            <Drawer />
        </>
    )
}
