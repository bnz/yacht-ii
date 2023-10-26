import { recoilPersist } from "recoil-persist"

export function persist(key: string) {
    return recoilPersist({ key }).persistAtom
}
