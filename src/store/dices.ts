import { builder } from "@helpers/localStorage"

const defaultValue = [-1, -1, -1, -1, -1]

export type DicesType = number[]

export const {
    signal: dices,
    update: updateDices,
} = builder<number[]>("dices", defaultValue)

export function resetDices() {
    updateDices(defaultValue)
}
