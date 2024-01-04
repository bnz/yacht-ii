import { selector } from "recoil"
import { isEndOfGameSelector } from "./isEndOfGame"
import { playerTotalsAtom } from "../atoms"
import { playersData } from "@signals/players/playersData"

export const winnerSelector = selector({
    key: "winnerSelector",
    get({ get }) {
        if (get(isEndOfGameSelector)) {
            const players = playersData.value
            const playerTotals = get(playerTotalsAtom)
            const playerKeys = Object.keys(playerTotals)
            const max = Math.max(...playerKeys.map(function (key) {
                return playerTotals[key]
            }))
            const index = playerKeys.findIndex(function (key) {
                return playerTotals[key] === max
            })
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
