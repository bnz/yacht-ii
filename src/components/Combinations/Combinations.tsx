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
        // decoratorWidth,
    ].join("px ") + "px"
}

export const wrapClassName = cx(
    "grid",
    "[&>div]:py-6",
    "lg:max-w-2/3",
    "w-full lg:w-fit",
    "mx-auto",
    "relative",
)

export const Combinations: FC = () => {
    const players = useRecoilValue(playersData)
    const isMoveAvailable = useRecoilValue(isMoveAvailableSelector)

    return (
        <div className="w-full overflow-auto">
            <div className={wrapClassName} style={{
                gridTemplateColumns: playersColsStyle[players.length],
            }}>
                <CombinationsHeader />
                {combinationsData.map(({ name, title, combination }) => {
                    const bonusClassName = cx(isBonus(combination) && "bg-[var(--line-color)] !py-2")

                    return (
                        <Fragment key={name}>
                            <div
                                className={cx(bonusClassName, "border-r border-b border-[var(--line-color)] px-2")}>
                                {name}
                                {/*<div className="absolute">*/}
                                {/*    {title}*/}
                                {/*</div>*/}
                            </div>
                            {players.map(({ id }) => (
                                <div key={id} className={cx("text-center", bonusClassName, "border-b border-b-[var(--line-color)]")}>
                                    <Combination
                                        playerId={id}
                                        combination={combination}
                                        isMoveAvailable={isMoveAvailable}
                                    />
                                </div>
                            ))}
                            {/*<div className={bonusClassName} />*/}
                        </Fragment>
                    )
                })}
                <CombinationsFooter />
            </div>
        </div>
    )
}
