import { i18n } from "@helpers/i18n"
import cx from "classnames"
import { playersDataActiveFirst } from "@store/players/playersDataActiveFirst"
import { commonSizes } from "./Combinations"
import { activePlayerId } from "@store/players/activePlayerId"
import { playerTotals } from "@store/playerTotals"

const common = "border-t-2 border-[--line-color]"

export function CombinationsFooter() {
    return (
        <>
            <div className={cx(common, commonSizes, "!justify-start pl-2")}>
                {i18n('total')}
            </div>
            {playersDataActiveFirst.value.map(function ({ id }) {
                return (
                    <div key={id} className={cx(
                        common, commonSizes, "text-center text-2xl font-bold",
                        activePlayerId.value === id
                            ? "border-l border-r bg-[--background-color-active]"
                            : "",
                    )}>
                        {playerTotals.value[id]}
                    </div>
                )
            })}
            <div className={cx(common, commonSizes)} />
        </>
    )
}
