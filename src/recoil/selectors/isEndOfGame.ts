import { selector } from "recoil"
import { combinationsData } from "../../components/Combinations/combinationsData"
import { playerPointsAtomFamily, playersData } from "../atoms"

export const isEndOfGameSelector = selector({
    key: "isEndOfGameSelector",
    get({ get }) {
        const players = get(playersData)
        const { id: lastPlayerId } = players[players.length - 1]
        const points = get(playerPointsAtomFamily(lastPlayerId))
        return Object.keys(combinationsData).length === Object.keys(points).length
    },
})
