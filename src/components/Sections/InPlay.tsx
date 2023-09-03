import type { FC } from "react"
import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
// import { ActivePlayerAvatar } from "../ActivePlayerAvatar"
import { EndOfGame } from "../EndOfGame/EndOfGame"

export const InPlay: FC = () => (
    <>
        <div className="backdrop-blur-lg sticky top-0 shadow-lg dark:shadow-2xl z-10">
            {/*<ActivePlayerAvatar />*/}
            <Dices />
            <DicesActions />
        </div>
        <Combinations />
        <EndOfGame />
    </>
)
