import { atom } from "recoil"
import { persist } from "../../persist"
import { isMobile } from "../../../helpers/isMobile"

export const activePlayerFirstAtom = atom<boolean>({
    key: "active-player-first",
    default: isMobile,
    effects: [persist('active-player-first')],
})
