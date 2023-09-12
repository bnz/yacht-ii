import { atom } from "recoil"

export const scrolledTo = atom<null | "logo" | "button">({
    key: "scrolledTo",
    default: null,
})
