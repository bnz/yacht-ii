import { atomFamily } from "recoil"
import { persist } from "../persist"

export const enum NamesColumnViewEnum {
    "text",
    "preview",
}

export const namesColumnViewAtomFamily = atomFamily<NamesColumnViewEnum, string>({
    key: "names-column-view",
    default: NamesColumnViewEnum.text,
    effects: [persist('names-column-view')],
})
