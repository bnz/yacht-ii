import { builder } from "@helpers/localStorage"

type ScrolledTo = null | "logo" | "button"

export const {
    signal: scrolledTo,
    update,
} = builder<ScrolledTo>(null, null)
