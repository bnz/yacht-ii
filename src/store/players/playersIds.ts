import { builder } from "@helpers/localStorage"

export const {
    signal: playersIds,
    update: updatePlayersIds,
} = builder<string[]>("playersIds", [])
