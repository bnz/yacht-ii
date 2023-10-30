import { selector } from "recoil"
import { childCombinations, combinationsData } from "../../components/Combinations/combinationsData"
import { playerPointsAtomFamily, playersData } from "../atoms"
import { childPlayAtom } from "../atoms/childPlayAtom"

export const isEndOfGameSelector = selector({
    key: "isEndOfGameSelector",
    get({ get }) {
        const childPlay = get(childPlayAtom)
        const players = get(playersData)
        const { id: lastPlayerId } = players[players.length - 1]
        const points = get(playerPointsAtomFamily(lastPlayerId))
        return Object.keys(childPlay ? childCombinations : combinationsData).length === Object.keys(points).length
    },
})
