import type { FC } from "react"
import { combinationsData, isBonus } from "./combinationsData"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue } from "recoil"
import { isMoveAvailableSelector, playersData } from "../../atoms"
import { Fragment } from "react"
import { Combination } from "./Combination"
import cx from "classnames"
import { Avatar } from "../Players/Avatar"
import { CombinationsHeader } from "./CombinationsHeader"
import { CombinationsFooter } from "./CombinationsFooter"
import { ActivePlayerAvatar } from "../ActivePlayerAvatar"
import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"

const decoratorWidth = 30
const titleWidth = 150
const playerColorWidth = 200

export const playersColsStyle: Record<number, string> = {}

for (let i = 1; i <= 4; i++) {
    playersColsStyle[i] = [
        titleWidth,
        ...(new Array(i).fill(playerColorWidth)),
        decoratorWidth,
    ].join("px ") + "px"
}

export const wrapClassName = cx(
    "grid",
    "[&>div]:py-6",
    "lg:max-w-2/3",
    "w-full lg:w-fit",
    "mx-auto",
    // "mt-6",
    // "overflow-auto",
    "relative",
)

export const Combinations: FC = () => {
    const players = useRecoilValue(playersData)
    const isMoveAvailable = useRecoilValue(isMoveAvailableSelector)

    return (
        <div className="overflow-auto absolute inset-0 top-24">
            <div className={wrapClassName} style={{
                gridTemplateColumns: playersColsStyle[players.length],
            }}>
                <CombinationsHeader />
                {combinationsData.map(({ name, title, combination }) => {
                    const bonusClassName = cx(isBonus(combination),
                        // && "bg-gray-300 dark:bg-gray-300/10 !py-2"
                    )

                    return (
                        <Fragment key={name}>
                            <div
                                className={cx(bonusClassName, "border-r px-2 sticky left-0 bg-[var(--background-color)] z-[1]")}>
                                {name}
                                {/*<div className="absolute">*/}
                                {/*    {title}*/}
                                {/*</div>*/}
                            </div>
                            {players.map(({ id }) => (
                                <div key={id} className={cx("text-center", bonusClassName, "")}>
                                    <Combination
                                        playerId={id}
                                        combination={combination}
                                        isMoveAvailable={isMoveAvailable}
                                    />
                                </div>
                            ))}
                            <div className={cx(bonusClassName, "")} />
                        </Fragment>
                    )
                })}
                <CombinationsFooter />
            </div>
        </div>
    )
}
