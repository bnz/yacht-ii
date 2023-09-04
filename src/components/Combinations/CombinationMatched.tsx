import type { FC } from "react"
import { useCallback, useMemo } from "react"
import { Combination } from "./combinationsData"
import cx from "classnames"
import { useRecoilState, useRecoilValue } from "recoil"
import { playerPointsAtomFamily } from "../../recoil/atoms"
import { MatchedView, matchedViewAtom } from "../../recoil/atoms/matchedViewAtom"
import { historyAtomFamily } from "../../recoil/atoms/historyAtomFamily"
import { Dice } from "../Dices/Dice/Dice"

interface CombinationMatchedProps {
    className?: string
    playerId: string
    combination: Combination
}

export const CombinationMatched: FC<CombinationMatchedProps> = ({ className, playerId, combination }) => {
    const playerPoints = useRecoilValue(playerPointsAtomFamily(playerId))
    const [matchedView, setMatchedView] = useRecoilState(matchedViewAtom(playerId))
    const isPoints = matchedView === MatchedView.points
    const toggle = useCallback(() => {
        setMatchedView((prev) => prev === MatchedView.points ? MatchedView.preview : MatchedView.points)
    }, [setMatchedView])

    const history = useRecoilValue(historyAtomFamily(playerId))

    const historyMove = useMemo(
        () => history.find(({ result }) => (
            Object.keys(result).some((key) => key === `${combination}`)
        )),
        [history, combination],
    )

    if (!historyMove || !playerPoints[combination]) {
        return (
            <div className={cx("text-2xl font-thin", className)} onClick={toggle}>
                {playerPoints[combination]}
            </div>
        )
    }

    let dices = [...historyMove.tries[historyMove.tries.length - 1]].sort()

    const filterOutRestDices = (dices: number[], combination: Combination) => {
        switch (combination) {
            case Combination.ONE:
            case Combination.TWO:
            case Combination.THREE:
            case Combination.FOUR:
            case Combination.FIVE:
            case Combination.SIX:
                dices = dices.filter((dice) => dice === combination)
                break
            case Combination.EQUAL_3:
            case Combination.EQUAL_4: {
                const count = parseInt(combination.split("_")[1], 10)
                const counts: { [k: string]: number } = {}
                dices.forEach((x) => counts[x] = (counts[x] || 0) + 1)
                const result = Object.keys(counts).filter((key) => counts[key] >= count)
                dices = new Array(count).fill(result[0])
                break
            }
            case Combination.BIG_STRAIGHT:
            case Combination.SMALL_STRAIGHT:
                dices = Array.from(new Set(dices))
                break
            case Combination.TWO_PAIR:
                const counts: { [k: string]: number } = {}
                dices.forEach((x) => counts[x] = (counts[x] || 0) + 1)
                const result = Object.keys(counts)
                    .filter((key) => counts[key] === 2)
                    .map((key) => parseInt(key, 10))
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
                {dices.map((dice, index) => (
                    <Dice key={index} value={dice} index={0} />
                ))}
            </div>
        </div>
    )
}
