import { atom } from "recoil"
import { persist } from "../../persist"

export type PlayerMove = [playerId: string, shot: number]

// {"playerMoveAtom":["19513ddc-1615-426d-b53c-764dea729703",0]}

export const playerMoveAtom = atom<PlayerMove>({
    key: "playerMoveAtom",
    default: ['', 0],
    effects: [persist('player-move')],
})
