import { useCallback } from "react"
import { i18n } from "@helpers/i18n"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { players } from "@signals/players/players"
import { removePlayer } from "@signals/players/updaters/removePlayer"
import { editingInProgress } from "@signals/editingInProgress"

interface RowProps {
    id: string

    callback(): void

    flash?: boolean

    flashEnd(): void
}

export function Row({ id, callback, flash, flashEnd }: RowProps) {
    const { name, avatar } = players.value[id]
    const handleRemove = useCallback(function () {
        removePlayer(id)
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
