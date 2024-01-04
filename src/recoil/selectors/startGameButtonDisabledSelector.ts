import { selector } from "recoil"
import { playersData } from "@signals/players/playersData"
import { editingInProgress } from "@signals/editingInProgress"

export const startGameButtonDisabledSelector = selector<boolean>({
    key: "startGameButtonDisabledSelector",
    get() {
        return playersData.value.length <= 0 || editingInProgress.value
    },
})
