import { i18n } from "@helpers/i18n"
import cx from "classnames"
import { commonSizes } from "./Combinations"
import { players } from "@store/players/players"

const common = "border-t-2 border-[--line-color]"

export function CombinationsFooter() {
    return (
        <>
            <div className={cx(common, commonSizes, "!justify-start pl-2")}>
                {i18n('total')}
            </div>
            {players.dataActiveFirst.map(function ({ id }) {
                return (
                    <div key={id} className={cx(
                        common, commonSizes, "text-center text-2xl font-bold",
                        players.activeId === id
                            ? "border-l border-r bg-[--background-color-active]"
                            : "",
                    )}>
                        {players.points.totals[id]}
                    </div>
                )
            })}
            <div className={cx(common, commonSizes)} />
        </>
    )
}
