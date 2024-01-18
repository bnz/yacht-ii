import { Avatar } from "../Players/Avatar"
import { players } from "@store/players/players"
import cx from "classnames"
import { commonBorder } from "./Combinations"
import { ToggleNamesColumnViewButton } from "./ToggleNamesColumnViewButton"

export function CombinationsHeader() {
    return (
        <>
            <ToggleNamesColumnViewButton />
            {players.dataActiveFirst.map(function ({ id, data: { name, avatar } }) {
                return (
                    <div key={id} className={cx(
                        commonBorder,
                        "flex flex-row justify-center items-center gap-3 relative",
                    )}>
                        <Avatar disabled={players.activeId !== id} avatar={avatar} className="!w-20 !h-20" />
                        <div className="absolute bottom-0 left-1/2 translate-x-6">
                            {name}
                        </div>
                    </div>
                )
            })}
            <div className={commonBorder} />
        </>
    )
}
