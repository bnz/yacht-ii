import { selector } from "recoil"
import { childCombinations, combinationsData } from "@components/Combinations/combinationsData"
import { playerPointsAtomFamily } from "../atoms"
import { childPlay } from "@signals/childPlay"
import { playersData } from "@signals/players/playersData"

export const isEndOfGameSelector = selector({
    key: "isEndOfGameSelector",
    get({ get }) {
        const players = playersData.value
        const { id: lastPlayerId } = players[players.length - 1]
        const points = get(playerPointsAtomFamily(lastPlayerId))
        return Object.keys(childPlay.value ? childCombinations : combinationsData).length === Object.keys(points).length
    },
})
