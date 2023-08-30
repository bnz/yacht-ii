import { atom } from "recoil"
import { Combination } from "../../components/Combinations/combinationsData"

export const combinationNameVisibilityAtom = atom<Combination | null>({
    key: "combinationNameVisibilityAtom",
    default: null,
})
