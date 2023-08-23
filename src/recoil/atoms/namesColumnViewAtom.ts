import { atom } from "recoil"
import { persist } from "../persist"

export const enum NamesColumnViewEnum {
    "text",
    "preview",
}

export const namesColumnViewAtom = atom<NamesColumnViewEnum>({
    key: "namesColumnViewAtom",
    default: NamesColumnViewEnum.text,
    effects: [persist('names-column-view')],
})
