import { builder } from "@helpers/localStorage"

export const {
    signal: childPlay,
    update: updateChildPlay,
} = builder<boolean>("childPlay", false)
