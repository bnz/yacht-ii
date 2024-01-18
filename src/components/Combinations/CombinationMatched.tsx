import { useCallback, useMemo } from "react"
import { Combination } from "./combinationsData"
import cx from "classnames"
import { Dice } from "../Dices/Dice/Dice"
import { MatchedView, matchedView } from "@store/matchedView"
import { getPlayerPoints } from "@store/playerPoints"
import { playerHistory } from "@store/history"

interface CombinationMatchedProps {
    className?: string
    playerId: string
    combination: Combination
}

export function CombinationMatched({ className, playerId, combination }: CombinationMatchedProps) {
    const playerPoints = getPlayerPoints(playerId)
    const isPoints = matchedView.getByPlayerId(playerId) === MatchedView.points
    const toggle = useCallback(function () {
        matchedView.toggle(playerId)
    }, [playerId])

    const history = playerHistory(playerId)

    const historyMove = useMemo(
        function () {
            return history.find(function ({ result }) {
                return Object.keys(result).some(function (key) {
                    return key === `${combination}`
                })
            })
        },
        [history, combination],
    )

    if (!historyMove || !playerPoints[combination]) {
        return (
            <div className={cx("text-2xl font-thin", className)} onClick={toggle}>
                {playerPoints[combination]}
            </div>
        )
    }

    // console.log(history, historyMove)

    let dices = [...historyMove.tries[historyMove.tries.length - 1]].sort()

    function filterOutRestDices(dices: number[], combination: Combination) {
        switch (combination) {
            case Combination.ONE:
            case Combination.TWO:
            case Combination.THREE:
            case Combination.FOUR:
            case Combination.FIVE:
            case Combination.SIX:
                dices = dices.filter(function (dice) {
                    return dice === combination
                })
                break
            case Combination.EQUAL_3:
            case Combination.EQUAL_4: {
                const count = parseInt(combination.split("_")[1], 10)
                const counts: { [k: string]: number } = {}
                dices.forEach(function (x) {
                    return counts[x] = (counts[x] || 0) + 1
                })
                const result = Object.keys(counts).filter(function (key) {
                    return counts[key] >= count
                })
                dices = new Array(count).fill(result[0])
                break
            }
            case Combination.BIG_STRAIGHT:
            case Combination.SMALL_STRAIGHT:
                dices = Array.from(new Set(dices))
                break
            case Combination.TWO_PAIR:
                const counts: { [k: string]: number } = {}
                dices.forEach(function (x) {
                    return counts[x] = (counts[x] || 0) + 1
                })
                const result = Object.keys(counts)
                    .filter(function (key) {
                        return counts[key] === 2
                    })
                    .map(function (key) {
                        return parseInt(key, 10)
                    })
                dices = [...result, ...result].sort()
                break
        }
        return dices
    }

    dices = filterOutRestDices(dices, combination)

    return (
        <div className={cx("relative", className)} onClick={toggle}>
            <div className={cx(
                "text-2xl font-thin",
                "opacity-0",
                "absolute",
                isPoints ? "animate-fadeOut" : "animate-fadeIn",
            )}>
                {playerPoints[combination]}
            </div>
            <div className={cx(
                "flex gap-[.25em]",
                "opacity-0",
                "absolute",
                isPoints ? "animate-fadeIn" : "animate-fadeOut",
            )}>
                {dices.map(function (dice, index) {
                    return <Dice key={index} value={dice} index={0} />
                })}
            </div>
        </div>
    )
}
