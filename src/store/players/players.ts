import { AvatarEnum } from "../../recoil/atoms"
import { builder } from "@helpers/localStorage"

export interface PlayerData {
    name: string
    avatar: AvatarEnum
}

export type Players = Record<string, PlayerData>

export const {
    signal: players,
    update: updatePlayers,
} = builder<Players>("players", {})
