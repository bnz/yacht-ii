import { selector } from "recoil"
import { isEndOfGameSelector } from "./isEndOfGame"
import { playersData, playerTotalsAtom } from "../atoms"

export const winnerSelector = selector({
    key: "winnerSelector",
    get({ get }) {
        if (get(isEndOfGameSelector)) {
            const players = get(playersData)
            const playerTotals = get(playerTotalsAtom)
            const playerKeys = Object.keys(playerTotals)
            const max = Math.max(...playerKeys.map((key) => playerTotals[key]))
            const index = playerKeys.findIndex((key) => playerTotals[key] === max)
            const { data: { name, avatar } } = players[index]
            return {
                name,
                avatar,
                total: max,
            }
        }
        return null
    },
})
