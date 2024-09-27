import { Fragment, PropsWithChildren, useEffect, useState } from "react"
import { Combination as CombinationType, CombinationInfo, isBonus } from "./combinationsData"
import { MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import cx from "classnames"
import { CombinationsHeader } from "./CombinationsHeader"
import { CombinationsFooter } from "./CombinationsFooter"
import { Combination } from "./Combination"
import { CombinationName } from "./CombinationName"
import { isMoveAvailable } from "@store/isMoveAvailable"
import { players } from "@store/players/players"
import { useSignals } from "@preact/signals-react/runtime"

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

function HeaderWrapper({ children }: PropsWithChildren<{}>) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(function () {
        window.addEventListener("scroll", function (e: any) {
            setScrolled(e.target?.documentElement?.scrollTop > 5)
        })
    }, [setScrolled])

    return (
        <div
            className={cx(
                wrapClassName,
                "sticky top-0 bg-[--background-color] z-10 pt-3 md:pt-0",
                scrolled && "shadow-xl md:shadow-none",
            )}
            style={{
                gridTemplateColumns: playersColsStyle[players.dataActiveFirst.length],
            }}
        >
            {children}
        </div>
    )
}

interface CombinationsProps {
    combinations: CombinationInfo[]
}

export function Combinations({ combinations }: CombinationsProps) {

    // FIXME - why?..
    useSignals()

    return (
        <div className="w-full px-2 md:overflow-auto lg:px-0 order-1 md:order-2 pb-36">
            <HeaderWrapper>
                <CombinationsHeader />
            </HeaderWrapper>
            <div className={wrapClassName} style={{
                gridTemplateColumns: playersColsStyle[players.dataActiveFirst.length],
            }}>
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
