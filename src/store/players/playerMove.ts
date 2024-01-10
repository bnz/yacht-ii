import { builder } from "@helpers/localStorage"

export type PlayerMove = [playerId: string, shot: number]

const defaultValue: PlayerMove = ["", 0]

export const {
    signal: playerMove,
    update: updatePlayerMove,
} = builder<PlayerMove>("playerMove", defaultValue)

export function resetPlayerMove() {
    updatePlayerMove(defaultValue)
}
