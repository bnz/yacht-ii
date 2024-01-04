import { DefaultValue, selector } from "recoil"
import { dicesAtom, dicesSelectedAtom, playerPointsAtomFamily, Points } from "../atoms"
import { BONUS_CONDITION, BONUS_POINTS, Combination } from "@components/Combinations/combinationsData"
import { historySaveCombinationSelector } from "./historySaveCombinationSelector"
import { activePlayerId } from "@signals/players/activePlayerId"
import { nextTurn } from "@signals/players/updaters/nextTurn"

interface Props {
    combination: Combination
    points?: number
}

function calcBonus(points: Points): number {
    const bonus = Object.keys(points).reduce(function (prev, curr) {
        return isNaN(parseInt(curr, 10)) ? prev : prev + points[curr as Combination]!
    }, 0)

    return bonus >= BONUS_CONDITION ? BONUS_POINTS : (BONUS_CONDITION - bonus) * -1
}

export const saveCombinationSelector = selector<Props>({
    key: "saveCombinationSelector",
    get() {
        throw new Error("saveCombination: use only as setter")
    },
    set({ get, set, reset }, props) {
        if (!(props instanceof DefaultValue)) {
            const { combination, points } = props
            const playerPoints = { ...get(playerPointsAtomFamily(activePlayerId.value)) }

            playerPoints[combination] = points
            playerPoints[Combination.BONUS] = calcBonus(playerPoints)
            set(playerPointsAtomFamily(activePlayerId.value), playerPoints)
            nextTurn()
            set(historySaveCombinationSelector, { combination, points })
            reset(dicesAtom)
            reset(dicesSelectedAtom)

            window.scrollTo({ top: 0, behavior: "smooth" })

            // TODO
            // saveResultToHistoryThunk(playerId, combination, points)
        }
    },
})
