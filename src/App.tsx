import type { FC } from "react"
import { Drawer } from "./components/Drawer/Drawer"
import { useRecoilValue } from "recoil"
import { gamePhase, GamePhases } from "./atoms"
import { PreGame } from "./components/Sections/PreGame"
import { Players } from "./components/Sections/Players"
import { InPlay } from "./components/Sections/InPlay"
import cx from "classnames"

const phases = {
    [GamePhases.PRE_GAME]: PreGame,
    [GamePhases.PLAYERS_SELECTION]: Players,
    [GamePhases.IN_PLAY]: InPlay,
}

const arr = (new Array(100))

export const App: FC = () => {
    const GamePhase = phases[useRecoilValue(gamePhase)]

    return (
        <>
            {/*<div className="relative min-h-full select-none mx-auto"></div>*/}
            <GamePhase />
            <Drawer />


            {/*<div className="grid grid-cols-[300px_300px_300px_300px_300px]">*/}
            {/*    <div className="text-center p-3 sticky top-0 left-0 bg-[var(--background-color)] col-span-5">*/}
            {/*        HEADER*/}
            {/*    </div>*/}

            {/*    {[...arr].map((_, i) => {*/}

            {/*        return (*/}
            {/*            <div key={i} className={cx(*/}
            {/*                // "outline",*/}
            {/*                "p-3",*/}
            {/*                i <= 4 && "bg-red-800 sticky top-12",*/}
            {/*                arr.length - i <= 5 && "bg-red-800 sticky bottom-12",*/}
            {/*            )}>*/}
            {/*                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus error*/}
            {/*                excepturi*/}
            {/*                harum incidunt, ipsam magnam modi, molestias non odit pariatur perspiciatis qui*/}
            {/*                quibusdam*/}
            {/*                quis sapiente, sequi voluptatum. Nobis, voluptatum.*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}

            {/*    <div className="text-center p-3 sticky bottom-0 bg-[var(--background-color)] col-span-5">*/}
            {/*        FOOTER*/}
            {/*    </div>*/}

            {/*</div>*/}

        </>
    )
}
