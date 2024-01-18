import cx from "classnames"
import { getDogs } from "@helpers/getDogs"
import { players } from "@store/players/players"

export function ActivePlayerAvatar() {
    const { avatar, name } = players.active

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
                backgroundImage: `url('${getDogs().normal[avatar]}')`,
            }}
        >
            {name}
        </div>
    )
}
