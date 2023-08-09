import type { FC } from "react"
import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
import { ActivePlayerAvatar } from "../ActivePlayerAvatar"

export const InPlay: FC = () => (
    <>
        <div className="backdrop-blur sticky top-0 shadow-lg dark:shadow-2xl">
            <ActivePlayerAvatar />
            <Dices />
            <DicesActions />
        </div>
        <Combinations />
    </>
)
