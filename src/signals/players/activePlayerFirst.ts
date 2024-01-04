import { signal } from "@preact/signals-react"
import { isMobile } from "@helpers/isMobile"

export const activePlayerFirst = signal<boolean>(isMobile)
