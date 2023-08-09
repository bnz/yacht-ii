import type { FC } from "react"
import React, { useCallback } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { editingInProgress, players, removePlayer } from "../../atoms"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"

interface RowProps {
    id: string
    callback(): void
    flash?: boolean
    flashEnd(): void
}

export const Row: FC<RowProps> = ({ id, callback, flash, flashEnd }) => {
    const { name, avatar } = useRecoilValue(players(id))
    const remove = useSetRecoilState(removePlayer)
    const handleRemove = useCallback(() => remove(id), [id, remove])
    const disabled = useRecoilValue(editingInProgress)

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
