import { isMobile } from "@helpers/isMobile"
import { builder } from "@helpers/localStorage"

export const {
    signal: activePlayerFirst
} = builder<boolean>(null, isMobile)
