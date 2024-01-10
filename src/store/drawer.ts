import { builder } from "@helpers/localStorage"

export const {
    signal: drawer,
    update,
    toggle,
} = builder("drawer", false)
