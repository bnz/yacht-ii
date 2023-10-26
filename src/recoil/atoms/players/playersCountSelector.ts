import { selector } from "recoil"
import { playersIds } from "./playersIds"

export const playersCountSelector = selector<number>({
    key: "players-count",
    get({ get }) {
        return get(playersIds).length
    },
})
