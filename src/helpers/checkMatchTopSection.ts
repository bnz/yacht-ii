import { Combination } from "@components/Combinations/combinationsData"
import { DicesType } from "@store/dices"
import { Return } from "./checkMatch"

export function checkMatchTopSection(combinationType: Combination, dices: DicesType): Return<number> | false {
    const values = Object.values(dices)
    const sequence = values.sort()

    switch (combinationType) {
        case Combination.ONE:
        case Combination.TWO:
        case Combination.THREE:
        case Combination.FOUR:
        case Combination.FIVE:
        case Combination.SIX: {
            const matches = sequence.filter(function (item) {
                return item === combinationType
            })
            if (matches.length >= 3) {
                return {
                    points: matches.length * combinationType,
                    maxPoints: 5 * combinationType,
                }
            }
            return false
        }
        default:
            return false
    }
}
