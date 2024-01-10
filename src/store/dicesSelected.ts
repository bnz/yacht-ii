import { builder } from "@helpers/localStorage"

export const {
    signal: dicesSelected,
    update: updateDicesSelected,
} = builder<number[]>("dicesSelected", [])
