import { Avatar } from "../Players/Avatar"
import { playersDataActiveFirst } from "@store/players/playersDataActiveFirst"
import cx from "classnames"
import { commonBorder } from "./Combinations"
import { ToggleNamesColumnViewButton } from "./ToggleNamesColumnViewButton"
import { activePlayerId } from "@store/players/activePlayerId"

export function CombinationsHeader() {
    const players = playersDataActiveFirst.value

    return (
        <>
            <ToggleNamesColumnViewButton />
            {players.map(function ({ id, data: { name, avatar } }) {
                return (
                    <div key={id} className={cx(
                        commonBorder,
                        "flex flex-row justify-center items-center gap-3 relative",
                    )}>
                        <Avatar disabled={activePlayerId.value !== id} avatar={avatar} className="!w-20 !h-20" />
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
