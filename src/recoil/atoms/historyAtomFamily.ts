import { atomFamily } from "recoil"
import { Combination } from "../../components/Combinations/combinationsData"
import { persist } from "../persist"
import { DicesType } from "../atoms"

export interface Move {
    tries: DicesType[]
    result: {
        [key in Combination]?: number
    }
    dicesSelected: DicesType[]
}

export const historyAtomFamily = atomFamily<Move[], string>({
    key: "historyAtomFamily",
    default: [
        // { tries: [], result: {}, dicesSelected: [] },
    ],
    effects: [persist("history")],
})
