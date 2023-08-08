import type { FC } from "react"
import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
import { useRecoilValue } from "recoil"
import { playerMoveAtom, players } from "../../atoms"
import { useDogs } from "../Players/AvatarChooser"
import cx from "classnames"

export const InPlay: FC = () => {
    const [playerId] = useRecoilValue(playerMoveAtom)
    const { avatar, name } = useRecoilValue(players(playerId))
    const dogs = useDogs()

    return (
        <>
            <div className="backdrop-blur sticky top-0 shadow-lg dark:shadow-2xl">
                <div
                    className={cx(
                        "hidden lg:block",
                        "absolute right-0 top-0",
                        "-z-10 w-96 h-full",
                        "border",
                        "bg-no-repeat bg-contain",
                    )}
                    style={{
                        backgroundImage: `url('${dogs[avatar]}')`,
                    }}
                >
                    {name}
                </div>
                <Dices />
                <DicesActions />
            </div>
            <Combinations />
        </>
    )
}
