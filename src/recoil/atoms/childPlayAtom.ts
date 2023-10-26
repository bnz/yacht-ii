import { atom } from 'recoil'
import { persist } from '../persist'

export const childPlayAtom = atom<boolean>({
    key: "childPlay",
    default: false,
    effects: [persist("child-play")],
})
