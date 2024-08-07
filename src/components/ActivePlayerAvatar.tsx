import cx from "classnames"
import { players } from "@store/players/players"
import { warIcons } from "@helpers/getWarIcons"
import { theme } from "@store/theme"

export function ActivePlayerAvatar() {
    return (
        <div
            className={cx(
                "absolute right-0 top-0 bottom-0",
                "-z-10 pointer-events-none",
                "bg-no-repeat bg-center",
                "bg-[length:97.5%]",
                "aspect-square",
                "translate-x-[15%] md:translate-x-0",
                "-translate-y-[15%] md:translate-y-0",
                "after:absolute after:inset-0",
                "after:bg-gradient-to-tr after:from-20% after:from-[--background-color]",
            )}
            style={{
                backgroundImage: `url('${warIcons[players.active.avatar]}#${theme}-disabled')`,
            }}
        />
    )
}
