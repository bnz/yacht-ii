import { selector } from "recoil"
import { dicesAtom, dicesSelectedAtom } from "../atoms"
import { historyAtomFamily, Move } from "../atoms/historyAtomFamily"
import { activePlayerId } from "@signals/players/activePlayerId"
import { activePlayerShot } from "@signals/players/activePlayerShot"

export const historyUpdateDicesSelector = selector<boolean>({
    key: "historyUpdateDicesSelector",
    get() {
        throw new Error("historySelector: use only as setter")
    },
    set({ get, set }, props) {
        const dicesSelected = get(dicesSelectedAtom)
        const dices = get(dicesAtom)
        const shot = activePlayerShot.value
        const history: Move[] = JSON.parse(JSON.stringify(get(historyAtomFamily(activePlayerId.value))))

        if (shot === 1) {
            history.push({
                tries: [dices],
                result: {},
                dicesSelected: [],
            })
        } else {
            const lastElementIndex = history.length - 1
            history[lastElementIndex].tries.push(dices)
            history[lastElementIndex].dicesSelected.push(dicesSelected)
        }

        set(historyAtomFamily(activePlayerId.value), history)
    },
})
