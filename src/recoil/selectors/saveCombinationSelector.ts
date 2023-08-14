import { DefaultValue, selector } from "recoil"
import { dicesAtom, dicesSelectedAtom, playerPointsAtomFamily } from "../atoms"
import { Combination } from "../../components/Combinations/combinationsData"
import { nextTurnAtom } from "../atoms/nextTurnAtom"

interface Props {
    playerId: string
    combination: Combination
    points?: number
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
            set(playerPointsAtomFamily(playerId), playerPoints)
            set(nextTurnAtom, true)
            reset(dicesAtom)
            reset(dicesSelectedAtom)

            // TODO
            // saveResultToHistoryThunk(playerId, combination, points)
        }
    },
})
