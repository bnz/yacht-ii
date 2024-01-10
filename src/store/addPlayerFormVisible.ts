import { builder } from "@helpers/localStorage"

export const {
    signal: addPlayerFormVisible,
    update: updateAddPlayerFormVisible,
} = builder<boolean>(null, false)
