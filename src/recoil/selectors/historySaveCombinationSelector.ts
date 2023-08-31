import { DefaultValue, selector } from "recoil"
import { Combination } from "../../components/Combinations/combinationsData"
import { playerMoveAtom } from "../atoms/players/playerMove"
import { historyAtomFamily, Move } from "../atoms/historyAtomFamily"

export const historySaveCombinationSelector = selector<{ combination: Combination, points?: number }>({
    key: "historySaveCombinationSelector",
    get() {
        throw new Error("historySaveCombinationSelector: use only as setter")
    },
    set({ get, set, reset }, props) {
        if (!(props instanceof DefaultValue)) {
            const { combination, points } = props
            const [playerId] = get(playerMoveAtom)
            const history: Move[] = JSON.parse(JSON.stringify(get(historyAtomFamily(playerId))))
            const lastElementIndex = history.length - 1
            history[lastElementIndex].result[combination] = points
            set(historyAtomFamily(playerId), history)
        }
    },
})
