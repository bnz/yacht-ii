import { useCallback } from "react"
import { MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { playersCount } from "@signals/players/playersCount"
import { editingInProgress, updateEditingInProgress } from "@signals/editingInProgress"
import { addPlayerFormVisible, updateAddPlayerFormVisible } from "@signals/addPlayerFormVisible"

export function AddPlayer() {
    return (
        <ButtonWithIcon
            className="!py-5 !absolute right-3 md:right-0 top-1/2 -translate-y-1/2"
            icon="add"
            type="button"
            onClick={useCallback(function () {
                updateAddPlayerFormVisible(true)
                updateEditingInProgress(true)
            }, [])}
            disabled={
                playersCount.value === 0
                || addPlayerFormVisible.value
                || playersCount.value >= MAX_PLAYERS_COUNT
                || editingInProgress.value
            }
        />
    )
}
