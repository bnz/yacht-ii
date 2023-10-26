import { Combination } from "./combinationsData"
import { Dice } from "../Dices/Dice/Dice"
import cx from "classnames"

export function getDicesPreview(combination: Combination) {
    switch (combination) {
        case Combination.ONE:
        case Combination.TWO:
        case Combination.THREE:
        case Combination.FOUR:
        case Combination.FIVE:
        case Combination.SIX:
            return (
                <>
                    <Dice value={combination} index={0} />
                    <Dice value={combination} index={0} />
                    <Dice value={combination} index={0} />
                    <div className={cx(
                        "flex relative",
                        "after:block",
                        "after:absolute after:inset-0",
                        "after:bg-[--background-color-disabled]",
                    )}>
                        <Dice value={combination} index={0} />
                        <Dice value={combination} index={0} />
                    </div>
                </>
            )
        case Combination.EQUAL_3:
            return (
                <>
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                </>
            )
        case Combination.EQUAL_4:
            return (
                <>
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                </>
            )
        case Combination.SMALL_STRAIGHT:
            return [
                [1, 2, 3, 4].map(function (j) {
                    return <Dice key={j} value={j} index={0} />
                }),
                <div className="flex flex-col gap-3">
                    {[0, 1, 2].map(function (i) {
                        return (
                            <div key={i} className="flex">
                                {[1, 2, 3, 4].map(function (j) {
                                    return (
                                        <Dice key={j} value={j + i} index={0} />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>,
            ]
        case Combination.BIG_STRAIGHT:
            return [
                [1, 2, 3, 4, 5].map(function (j) {
                    return <Dice key={j} value={j} index={0} />
                }),
                <div className="flex flex-col gap-3">
                    {[0, 1].map(function (i) {
                        return (
                            <div key={i} className="flex">
                                {[1, 2, 3, 4, 5].map(function (j) {
                                    return (
                                        <Dice key={j} value={j + i} index={0} />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>,
            ]
        case Combination.TWO_PAIR:
            return (
                <>
                    <Dice value={2} index={0} />
                    <Dice value={2} index={0} />
                    <div className="w-[.5em]" />
                    <Dice value={5} index={0} />
                    <Dice value={5} index={0} />
                </>
            )
        case Combination.FULL_HOUSE:
            return (
                <>
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <div className="w-[.5em]" />
                    <Dice value={4} index={0} />
                    <Dice value={4} index={0} />
                    <Dice value={4} index={0} />
                </>
            )
        case Combination.THE_YACHT:
            return (
                <>
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={3} index={0} />
                </>
            )
        case Combination.CHANCE:
            return (
                <>
                    <Dice value={2} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={2} index={0} />
                    <Dice value={5} index={0} />
                    <Dice value={1} index={0} />
                </>
            )
        default:
            return null
    }
}
