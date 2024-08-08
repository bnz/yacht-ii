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
                const disabled = players.activeId !== id

                return (
                    <div key={id} className={cx(commonBorder, "p-2")}>
                        <div className={cx(
                            "cursor-pointer",
                            "hover:shadow-md hover:outline hover:outline-[--line-color]",
                            "active:shadow-inner",
                            "grid grid-cols-[80px_1fr]",
                            "rounded-full",
                        )}>
                            <Avatar
                                disabled={disabled}
                                avatar={avatar}
                                className="!w-20 !h-20 row-span-2"
                            />
                            <div className={cx(
                                "flex items-end justify-start",
                                disabled && "text-[--text-color-disabled]",
                            )}>
                                {name}
                            </div>
                            <div className={cx("text-2xl", disabled && "text-[--text-color-disabled]")}>
                                {players.points.totals[id]}
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className={commonBorder} />
        </>
    )
}
