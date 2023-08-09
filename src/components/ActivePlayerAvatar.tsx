import type { FC } from "react"
import cx from "classnames"
import { useRecoilValue } from "recoil"
import { playerMoveAtom, players } from "../atoms"
import { useDogs } from "./Players/Avatar"

export const ActivePlayerAvatar: FC = () => {
    const [playerId] = useRecoilValue(playerMoveAtom)
    const { avatar, name } = useRecoilValue(players(playerId))
    const dogs = useDogs()

    return (
        <div
            className={cx(
                "hidden lg:block",
                "absolute right-0 top-0",
                "-z-10 w-96 h-full",
                "border",
                "bg-no-repeat bg-contain",
                "text-[var(--background-color)]"
            )}
            style={{
                backgroundImage: `url('${dogs[avatar]}')`,
            }}
        >
            {name}
        </div>
    )
}
