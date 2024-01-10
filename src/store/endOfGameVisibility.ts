import { builder } from "@helpers/localStorage"

export const {
    signal: endOfGameVisibility,
    update: updateEndOfGameVisibility,
    toggle: toggleEndOfGameVisibility,
} = builder<boolean>(null, true)
