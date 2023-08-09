import type { FC } from "react"
import { combinationsData, isBonus } from "./combinationsData"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue } from "recoil"
import { isMoveAvailableSelector, playersData } from "../../atoms"
import { Fragment } from "react"
import { Combination } from "./Combination"
import cx from "classnames"
import { Avatar } from "../Players/Avatar"

const playersCols: Record<number, string> = {
    1: "grid-cols-3",
    2: "grid-cols-4",
    3: "grid-cols-5",
    4: "grid-cols-6",
    5: "grid-cols-7",
}

const a: Record<number, string> = {
    1: "col-span-3",
    2: "col-span-4",
    3: "col-span-5",
    4: "col-span-6",
    5: "col-span-7",
}

export const Combinations: FC = () => {
    const players = useRecoilValue(playersData)
    const isMoveAvailable = useRecoilValue(isMoveAvailableSelector)
    const wrapClassName = cx(
        "grid [&>div]:py-6",
        "lg:w-2/3 mx-auto",
        playersCols[players.length],
    )

    return (
        <>
            <div className={wrapClassName}>
                <div className="border-b">
                    {i18n('combinations')}
                </div>
                {players.map(({ id, data: { name, avatar } }) => (
                    <div key={id} className="border-b flex flex-col items-center !p-0">
                        <Avatar avatar={avatar} />
                        <div>{name}</div>
                    </div>
                ))}
                <div className="border-b" />
                {combinationsData.map(({ name, title, combination }) => {
                    const bonusClassName = cx(isBonus(combination) && "bg-gray-300 dark:bg-gray-300/10")

                    return (
                        <Fragment key={name}>
                            <div className={bonusClassName}>
                                {name}
                            </div>
                            {players.map(({ id }) => (
                                <div key={id} className={cx("text-center", bonusClassName)}>
                                    <Combination
                                        playerId={id}
                                        combination={combination}
                                        isMoveAvailable={isMoveAvailable}
                                    />
                                </div>
                            ))}
                            <div className={bonusClassName} />
                        </Fragment>
                    )
                })}
            </div>
            <div className="sticky bottom-0 shadow-2xl backdrop-blur-lg !p-0">
                <div className={wrapClassName}>
                    <div>
                        {i18n('total')}
                    </div>
                    {players.map(({ id, data: { name } }) => (
                        <div key={id}>
                            {name}
                        </div>
                    ))}
                    <div />
                </div>
            </div>
        </>
    )
}
