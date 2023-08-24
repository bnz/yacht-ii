import { selector } from "recoil"
import { playersData } from "../../atoms"
import { PlayerMove, playerMoveAtom } from "./playerMove"

export const nextTurnAtom = selector<boolean>({
    key: "nextTurnAtom",
    get() {
        throw new Error("nextTurnAtom: use only as setter")
    },
    set({ get, set }) {
        const players = get(playersData)
        const playerMove = get(playerMoveAtom)
        let { 0: playerId } = playerMove

        if (!playerId) {
            playerId = players[0].id
        } else {
            const index = players.findIndex(({ id }) => id === playerId)
            const player = players[index + 1]
            playerId = player ? player.id : players[0].id
        }
        set(playerMoveAtom, [playerId, 0] as PlayerMove)
    },
})
