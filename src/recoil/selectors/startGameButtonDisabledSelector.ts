import { selector } from "recoil"
import { editingInProgress } from "../atoms"
import { playersData } from "@signals/players/playersData"

export const startGameButtonDisabledSelector = selector<boolean>({
    key: "startGameButtonDisabledSelector",
    get({ get }) {
        const players = playersData.value
        const inProgress = get(editingInProgress)

        return players.length <= 0 || inProgress
    },
})
