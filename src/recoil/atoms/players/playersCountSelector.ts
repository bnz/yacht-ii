import { selector } from "recoil"
import { playersIds } from "./playersIds"

export const playersCountSelector = selector<number>({
    key: "players-count",
    get: ({ get }) => get(playersIds).length,
})
