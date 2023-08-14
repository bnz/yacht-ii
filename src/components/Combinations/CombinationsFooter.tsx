import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue } from "recoil"
import { playersData, playerTotals } from "../../recoil/atoms"
import cx from "classnames"
import { commonSizes } from "./Combinations"

const common = cx(
    "border-t-2",
    "border-[var(--line-color)]",
)

export const CombinationsFooter: FC = () => {
    const players = useRecoilValue(playersData)
    const totals = useRecoilValue(playerTotals)

    return (
        <>
            <div className={cx(common, commonSizes, "border-r")}>
                {i18n('total')}
            </div>
            {players.map(({ id, data: { name } }) => (
                <div key={id} className={cx(common, commonSizes, "text-center text-2xl font-bold")}>
                    {totals[id]}
                </div>
            ))}
            <div className={cx(common, commonSizes)} />
        </>
    )
}
