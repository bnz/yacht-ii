import { useCallback } from "react"
import { MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { editingInProgress, updateEditingInProgress } from "@store/editingInProgress"
import { addPlayerFormVisible, updateAddPlayerFormVisible } from "@store/addPlayerFormVisible"
import { players } from "@store/players/players"

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
                players.count === 0
                || addPlayerFormVisible.value
                || players.count >= MAX_PLAYERS_COUNT
                || editingInProgress.value
            }
        />
    )
}
