import { selector } from "recoil"

import { playersIds } from "./playersIds"

export const playersCount = selector<number>({
    key: "playersCount",
    get: ({ get }) => get(playersIds).length,
})
