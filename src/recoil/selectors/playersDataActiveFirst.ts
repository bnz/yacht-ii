import { selector } from "recoil"
import { playersData } from "@signals/players/playersData"
import { activePlayerFirst } from "@signals/players/activePlayerFirst"
import { activePlayerId } from "@signals/players/activePlayerId"

export const playersDataActiveFirst = selector({
    key: "playersDataActiveFirst",
    get() {
        if (!activePlayerFirst.value) {
            return playersData.value
        }
        const players = [...playersData.value]
        const index = players.findIndex(function ({ id }) {
            return id === activePlayerId.value
        })
        const beforeArray = players.slice(0, index)
        const arr = players.splice(index, players.length)
        return [...arr, ...beforeArray]
    },
})
