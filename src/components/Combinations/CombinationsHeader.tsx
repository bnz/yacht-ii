import { Avatar } from "../Players/Avatar"
import { players } from "@store/players/players"
import cx from "classnames"
import { commonBorder } from "./Combinations"
import { ToggleNamesColumnViewButton } from "./ToggleNamesColumnViewButton"
import { PlayerSummary } from "@components/Combinations/PlayerSummary"

export function CombinationsHeader() {
    return (
        <>
            <ToggleNamesColumnViewButton />
            {players.dataActiveFirst.map(function ({ id, data: { name, avatar } }) {
                const disabled = players.activeId !== id

                return (
                    <div key={id} className={cx(
                        commonBorder,
                        "p-2",
                        !disabled && cx(
                            "bg-[--background-color-active]",
                            // "border-l border-r border-t",
                            "rounded-tl-3xl rounded-tr-3xl",
                        ),
                    )}>
                        <PlayerSummary playerId={id}>
                            <Avatar
                                disabled={disabled}
                                avatar={avatar}
                                className="!w-20 !h-20 row-span-2 !z-0"
                            />
                            <div className={cx(
                                "flex items-end justify-start",
                                disabled ? "text-[--text-color-disabled]" : "text-[--text-color]",
                            )}>
                                {name}
                            </div>
                            <div className={cx("text-3xl", disabled && "text-[--text-color-disabled]")}>
                                {players.points.totals[id]}
                            </div>
                        </PlayerSummary>
                    </div>
                )
            })}
            <div className={commonBorder} />
        </>
    )
}
