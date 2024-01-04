import cx from "classnames"
import { useRecoilValue } from "recoil"
import { players } from "../recoil/atoms"
import { getDogs } from "./Players/Avatar"
import { playerMoveAtom } from "../recoil/atoms/players/playerMove"

export function ActivePlayerAvatar() {
    const [playerId] = useRecoilValue(playerMoveAtom)
    const { avatar, name } = useRecoilValue(players(playerId))
    const dogs = getDogs()

    return (
        <div
            className={cx(
                "hidden lg:block",
                "absolute right-0 top-0",
                "-z-10 w-96 h-full",
                "border",
                "bg-no-repeat bg-contain",
                "text-[--background-color]",
            )}
            style={{
                backgroundImage: `url('${dogs.normal[avatar]}')`,
            }}
        >
            {name}
        </div>
    )
}
