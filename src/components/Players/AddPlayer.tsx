import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { addPlayerFormVisible, editingInProgress, MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { playersCount } from "@signals/players/playersCount"

export function AddPlayer() {
    const [open, setOpen] = useRecoilState(addPlayerFormVisible)
    const [editing, setEditingInProgress] = useRecoilState(editingInProgress)

    const toggle = useCallback(function () {
        setOpen(function (prev) {
            return !prev
        })
        setEditingInProgress(true)
    }, [setOpen, setEditingInProgress])

    const disabled = playersCount.value === 0 || open || playersCount.value >= MAX_PLAYERS_COUNT || editing

    return (
        <ButtonWithIcon
            className="!py-5 !absolute right-3 md:right-0 top-1/2 -translate-y-1/2"
            icon="add"
            type="button"
            onClick={toggle}
            disabled={disabled}
        />
    )
}
