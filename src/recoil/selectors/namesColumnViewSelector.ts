import { DefaultValue, selector } from "recoil"
import { namesColumnViewAtomFamily, NamesColumnViewEnum } from "../atoms/namesColumnViewAtomFamily"
import { activePlayerId } from "@signals/players/activePlayerId"

export const namesColumnViewSelector = selector<NamesColumnViewEnum>({
    key: "namesColumnViewSelector",
    get({ get }) {
        return get(namesColumnViewAtomFamily(activePlayerId.value))
    },
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            set(namesColumnViewAtomFamily(activePlayerId.value), props)
        }
    },
})
