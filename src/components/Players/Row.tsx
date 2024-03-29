import { useCallback } from "react"
import { i18n } from "@helpers/i18n"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { players } from "@store/players/players"
import { editingInProgress } from "@store/editingInProgress"

interface RowProps {
    id: string

    callback(): void

    flash?: boolean

    flashEnd(): void
}

export function Row({ id, callback, flash, flashEnd }: RowProps) {
    const { name, avatar } = players.getById(id)
    const handleRemove = useCallback(function () {
        players.remove(id)
    }, [id])
    const disabled = editingInProgress.value

    return (
        <>
            <Avatar avatar={avatar} />
            <div className="flex-1 border-l border-r border-transparent relative flex items-center pl-2">
                {name}
                {flash && (
                    <div
                        className="text-green-500 animate-flash absolute right-0 top-1/2 -translate-y-1/2"
                        onAnimationEnd={flashEnd}
                    >
                        {i18n("saved")}
                    </div>
                )}
            </div>
            <ButtonWithIcon
                className="w-10"
                icon="edit"
                onClick={callback}
                disabled={disabled}
            />
            <ButtonWithIcon
                className="w-10"
                icon="delete"
                onClick={handleRemove}
                disabled={disabled}
            />
        </>
    )
}
