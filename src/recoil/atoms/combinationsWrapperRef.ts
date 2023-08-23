import { atom } from "recoil"

export const combinationsWrapperRefAtom = atom<null | HTMLDivElement>({
    key: "combinationsWrapperRefAtom",
    default: null,
})
