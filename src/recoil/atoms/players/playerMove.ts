import { atom } from "recoil"
import { persist } from "../../persist"

export type PlayerMove = [playerId: string, shot: number]

export const playerMoveAtom = atom<PlayerMove>({
    key: "player-move",
    default: ['', 0],
    effects: [persist('player-move')],
})
