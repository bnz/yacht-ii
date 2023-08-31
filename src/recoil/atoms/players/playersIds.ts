import { atom } from "recoil"
import { persist } from "../../persist"

export const playersIds = atom<string[]>({
    key: "playersIds",
    default: [],
    effects: [persist('players-ids')],
})
