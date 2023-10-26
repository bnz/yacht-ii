import { Fragment } from "react"
import { Combination as CombinationType, combinationsData, isBonus } from "./combinationsData"
import { useRecoilValue } from "recoil"
import { playersDataActiveFirst } from "../../recoil/selectors/playersDataActiveFirst"
import { MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import { isMoveAvailableSelector } from "../../recoil/selectors/isMoveAvailableSelector"
import cx from "classnames"
import { CombinationsHeader } from "./CombinationsHeader"
import { CombinationsFooter } from "./CombinationsFooter"
import { Combination } from "./Combination"
import { CombinationName } from "./CombinationName"

const decoratorWidth = 10
const titleWidth = 160
const playerColorWidth = 200

export const playersColsStyle: Record<number, string> = {}

for (let i = 1; i <= MAX_PLAYERS_COUNT; i++) {
    playersColsStyle[i] = [
        titleWidth,
        ...(new Array(i).fill(playerColorWidth)),
        decoratorWidth,
    ].join("px ") + "px"
}

export const wrapClassName = cx(
    "grid",
    // "[&>div]:py-6",
    "max-w-2/3",
    "w-fit",
    "mx-auto",
    "relative",
)

export const commonBorder = cx(
    "border-b border-[--line-color]",
)

export const commonSizes = cx(
    "h-14",
    "flex items-center justify-center",
)

export function Combinations() {
    const players = useRecoilValue(playersDataActiveFirst)
    const isMoveAvailable = useRecoilValue(isMoveAvailableSelector)

    return (
        <div className="w-full px-2 overflow-auto lg:px-0 pb-10">
            <div className={wrapClassName} style={{
                gridTemplateColumns: playersColsStyle[players.length],
            }}>
                <CombinationsHeader />
                {combinationsData.map(function ({ name, title, combination }) {
                    const bonusClassName = cx(isBonus(combination) && "!bg-[--line-color] italic font-thin border-b-0 !h-8")
                    const isSixClassName = cx(combination === CombinationType.SIX && "border-b-0")

                    return (
                        <Fragment key={name}>
                            <CombinationName
                                className={cx(
                                    bonusClassName,
                                    bonusClassName !== "" && "rounded-bl rounded-tl",
                                    isSixClassName,
                                )}
                                name={name}
                                title={title}
                                combination={combination}
                            />
                            {players.map(function ({ id }) {
                                return <Combination
                                    key={id}
                                    playerId={id}
                                    combination={combination}
                                    isMoveAvailable={isMoveAvailable}
                                    className={cx(
                                        bonusClassName,
                                        commonBorder,
                                        isSixClassName,
                                        "h-14 flex items-center justify-center",
                                    )}
                                />
                            })}
                            <div className={cx(
                                bonusClassName,
                                commonBorder,
                                bonusClassName !== "" && cx("rounded-br rounded-tr"),
                                isSixClassName,
                            )} />
                        </Fragment>
                    )
                })}
                <CombinationsFooter />
            </div>
            <div className="h-20 lg:hidden" />
        </div>
    )
}
