import { DefaultValue, selector } from "recoil"
import { playerMoveAtom } from "../atoms/players/playerMove"
import { namesColumnViewAtomFamily, NamesColumnViewEnum } from "../atoms/namesColumnViewAtomFamily"

export const namesColumnViewSelector = selector<NamesColumnViewEnum>({
    key: "namesColumnViewSelector",
    get: ({ get }) => get(namesColumnViewAtomFamily(get(playerMoveAtom)[0])),
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            set(namesColumnViewAtomFamily(get(playerMoveAtom)[0]), props)
        }
    },
})
