import { DefaultValue, selector } from "recoil"
import { dicesAtom, dicesSelectedAtom, playerPointsAtomFamily, Points } from "../atoms"
import { Combination } from "../../components/Combinations/combinationsData"
import { nextTurnAtom } from "../atoms/players/nextTurnAtom"

interface Props {
    playerId: string
    combination: Combination
    points?: number
}

export const BONUS_CONDITION = 63

export const BONUS_POINTS = 35

export const calcBonus = (points: Points): number => {
    const bonus = Object.keys(points).reduce((prev, curr) => (
        isNaN(parseInt(curr, 10)) ? prev : prev + points[curr as Combination]!
    ), 0)

    return bonus >= BONUS_CONDITION ? BONUS_POINTS : (BONUS_CONDITION - bonus) * -1
}

export const saveCombinationSelector = selector<Props>({
    key: "saveCombinationSelector",
    get() {
        throw new Error("saveCombination: use only as setter")
    },
    set({ get, set, reset }, props) {
        if (!(props instanceof DefaultValue)) {
            const { playerId, combination, points } = props
            const playerPoints = { ...get(playerPointsAtomFamily(playerId)) }

            playerPoints[combination] = points
            playerPoints[Combination.BONUS] = calcBonus(playerPoints)

            set(playerPointsAtomFamily(playerId), playerPoints)
            set(nextTurnAtom, true)
            reset(dicesAtom)
            reset(dicesSelectedAtom)

            // TODO
            // saveResultToHistoryThunk(playerId, combination, points)
        }
    },
})
