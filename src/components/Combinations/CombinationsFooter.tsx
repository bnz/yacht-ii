import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue } from "recoil"
import { playersDataActiveFirst } from "../../recoil/selectors/playersDataActiveFirst"
import { playerTotalsAtom } from "../../recoil/atoms"
import cx from "classnames"
import { commonSizes } from "./Combinations"
import { playerMoveAtom } from "../../recoil/atoms/players/playerMove"

const common = cx(
    "border-t-2",
    "border-[var(--line-color)]",
)

export const CombinationsFooter: FC = () => {
    const players = useRecoilValue(playersDataActiveFirst)
    const totals = useRecoilValue(playerTotalsAtom)
    const [playerId] = useRecoilValue(playerMoveAtom)

    return (
        <>
            <div className={cx(common, commonSizes, "!justify-start pl-2")}>
                {i18n('total')}
            </div>
            {players.map(({ id, data: { name } }) => (
                <div key={id} className={cx(
                    common, commonSizes, "text-center text-2xl font-bold",
                    playerId === id
                        ? "border-l border-r bg-[var(--background-color-active)]"
                        : "",
                )}>
                    {totals[id]}
                </div>
            ))}
            <div className={cx(common, commonSizes)} />
        </>
    )
}