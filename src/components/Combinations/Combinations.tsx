import { Fragment } from "react"
import { Combination as CombinationType, CombinationInfo, isBonus } from "./combinationsData"
import { MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import cx from "classnames"
import { CombinationsHeader } from "./CombinationsHeader"
import { CombinationsFooter } from "./CombinationsFooter"
import { Combination } from "./Combination"
import { CombinationName } from "./CombinationName"
import { isMoveAvailable } from "@store/isMoveAvailable"
import { players } from "@store/players/players"

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

export const wrapClassName = "grid max-w-2/3 w-fit mx-auto relative"
export const commonBorder = "border-b border-[--line-color]"
export const commonSizes = "h-14 flex items-center justify-center"

interface CombinationsProps {
    combinations: CombinationInfo[]
}

export function Combinations({ combinations }: CombinationsProps) {
    return (
        <div className="w-full px-2 overflow-auto lg:px-0 pb-10">
            <div className={wrapClassName} style={{
                gridTemplateColumns: playersColsStyle[players.dataActiveFirst.length],
            }}>
                <CombinationsHeader />
                {combinations.map(function ({ name, title, combination }) {
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
                            {players.dataActiveFirst.map(function ({ id }) {
                                return (
                                    <Combination
                                        key={id}
                                        playerId={id}
                                        combination={combination}
                                        isMoveAvailable={isMoveAvailable.value}
                                        className={cx(
                                            bonusClassName,
                                            commonBorder,
                                            isSixClassName,
                                            "h-14 flex items-center justify-center",
                                        )}
                                    />
                                )
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
