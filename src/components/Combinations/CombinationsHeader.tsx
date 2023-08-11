import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { Avatar } from "../Players/Avatar"
import { useRecoilValue } from "recoil"
import { playersData } from "../../atoms"
import cx from "classnames"

const common = cx(
    "border-b border-b-[var(--line-color)]",
    // "sticky",
    // "top-[92px]",
    // "top-[180px]",
    // "bg-[var(--background-color)]",
    "!p-0",
    // "!pt-20",
)

export const CombinationsHeader: FC = () => (
    <>
        <div className={cx(common, "!px-2 flex")}>
            {i18n('combinations')}
        </div>
        {useRecoilValue(playersData).map(({ id, data: { name, avatar } }) => (
            <div key={id} className={cx(common, "flex flex-row justify-center items-center gap-3 relative")}>
                <Avatar avatar={avatar} className="!w-20 !h-20" />
                <div className="absolute bottom-0 left-1/2 translate-x-6">
                    {name}
                </div>
            </div>
        ))}
        {/*<div className={common} />*/}
    </>
)
