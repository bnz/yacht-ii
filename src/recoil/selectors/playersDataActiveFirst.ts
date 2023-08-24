import { selector } from "recoil"
import { activePlayerFirstAtom } from "../atoms/players/activePlayerFirst"
import { playersData } from "../atoms"
import { playerMoveAtom } from "../atoms/players/playerMove"

export const playersDataActiveFirst = selector({
    key: "playersDataActiveFirst",
    get({ get }) {
        const activePlayerFirst = get(activePlayerFirstAtom)
        if (!activePlayerFirst) {
            return get(playersData)
        }
        const players = [...get(playersData)]
        const [playerId] = get(playerMoveAtom)
        const index = players.findIndex(({ id }) => id === playerId)
        const beforeArray = players.slice(0, index)
        const arr = players.splice(index, players.length)
        return [...arr, ...beforeArray]
    },
})
