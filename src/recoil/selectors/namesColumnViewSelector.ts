import { atom, atomFamily, DefaultValue, selector } from "recoil"
import { persist } from "../persist"
import { playerMoveAtom } from "../atoms/players/playerMove"

export const enum NamesColumnViewEnum {
    "text",
    "preview",
}

const namesColumnViewAtomFamily = atomFamily<NamesColumnViewEnum, string>({
    key: "namesColumnViewAtom",
    default: NamesColumnViewEnum.text,
    effects: [persist('names-column-view')],
})

export const namesColumnViewSelector = selector<NamesColumnViewEnum>({
    key: "namesColumnViewSelector",
    get: ({ get }) => get(namesColumnViewAtomFamily(get(playerMoveAtom)[0])),
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            set(namesColumnViewAtomFamily(get(playerMoveAtom)[0]), props)
        }
    },
})
