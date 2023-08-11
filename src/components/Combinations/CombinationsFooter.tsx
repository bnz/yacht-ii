import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
// import { playersColsStyle, wrapClassName } from "./Combinations"
import { useRecoilValue } from "recoil"
import { playersData } from "../../atoms"
import cx from "classnames"

const common = cx(
    "sticky bottom-0",
    "bg-[var(--background-color)]",
)

export const CombinationsFooter: FC = () => {
    const players = useRecoilValue(playersData)

    return (
        <>
            <div className={cx(common, "px-2")}>
                {i18n('total')}
            </div>
            {players.map(({ id, data: { name } }) => (
                <div key={id} className={cx(common, "text-center")}>
                    {name}
                </div>
            ))}
            {/*<div className={common} />*/}
        </>
    )
}
