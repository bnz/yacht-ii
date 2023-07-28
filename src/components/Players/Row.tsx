import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { players, removePlayer } from "../../atoms"
import { useCallback } from "react"

interface RowProps {
    id: string
    callback(): void
    flash?: boolean
    flashEnd(): void
}

export const Row: FC<RowProps> = ({ id, callback, flash, flashEnd }) => {
    const { name } = useRecoilValue(players(id))
    const remove = useSetRecoilState(removePlayer)
    const handleRemove = useCallback(() => remove({ id, data: { name: "" } }), [id, remove])

    return (
        <>
            <div className="flex-1 px-3 py-2 border-l border-r border-transparent relative">
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
            <button onClick={callback}>
                {i18n("edit")}
            </button>
            <button onClick={handleRemove}>
                {i18n("button.remove")}
            </button>
        </>
    )
}
