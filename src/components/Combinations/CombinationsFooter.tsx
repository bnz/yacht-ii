import { i18n } from "@helpers/i18n"
import { useRecoilValue } from "recoil"
import { playersDataActiveFirst } from "../../recoil/selectors/playersDataActiveFirst"
import { playerTotalsAtom } from "../../recoil/atoms"
import cx from "classnames"
import { commonSizes } from "./Combinations"
import { activePlayerId } from "@signals/players/activePlayerId"

const common = "border-t-2 border-[--line-color]"

export function CombinationsFooter() {
    const players = useRecoilValue(playersDataActiveFirst)
    const totals = useRecoilValue(playerTotalsAtom)

    return (
        <>
            <div className={cx(common, commonSizes, "!justify-start pl-2")}>
                {i18n('total')}
            </div>
            {players.map(function ({ id }) {
                return (
                    <div key={id} className={cx(
                        common, commonSizes, "text-center text-2xl font-bold",
                        activePlayerId.value === id
                            ? "border-l border-r bg-[--background-color-active]"
                            : "",
                    )}>
                        {totals[id]}
                    </div>
                )
            })}
            <div className={cx(common, commonSizes)} />
        </>
    )
}
