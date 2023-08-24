import type { FC } from "react"
import { useCallback } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { addPlayerFormVisible, editingInProgress, MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { playersCount } from "../../recoil/atoms/players/playersCount"

export const AddPlayer: FC = () => {
    const count = useRecoilValue(playersCount)
    const [open, setOpen] = useRecoilState(addPlayerFormVisible)
    const [editing, setEditingInProgress] = useRecoilState(editingInProgress)

    const toggle = useCallback(() => {
        setOpen((prev) => !prev)
        setEditingInProgress(true)
    }, [setOpen, setEditingInProgress])

    const disabled = count === 0 || open || count >= MAX_PLAYERS_COUNT || editing

    return (
        <ButtonWithIcon
            className="!py-5 !absolute right-3 top-1/2 -translate-y-1/2"
            icon="add"
            type="button"
            onClick={toggle}
            disabled={disabled}
        />
    )
}
