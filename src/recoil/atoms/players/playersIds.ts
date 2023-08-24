import { atom } from "recoil"
import { persist } from "../../persist"

// {"playersIds":["19513ddc-1615-426d-b53c-764dea729703","db8c64c0-7f65-412c-8641-4f9b9fd1f50d"]}

export const playersIds = atom<string[]>({
    key: "playersIds",
    default: [],
    effects: [persist('players-ids')],
})
