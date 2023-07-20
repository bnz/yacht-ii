import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useEffect, useRef, useState } from "react"
import { useSetRecoilState } from "recoil"
import { addPlayer } from "../../atoms"
import { makeId } from "../../helpers/makeId"

interface AddPlayerFormProps {
    callback(): void
}

export const AddPlayerForm: FC<AddPlayerFormProps> = ({ callback }) => {
    const ref = useRef<null | HTMLInputElement>(null)
    const [value, setValue] = useState("")

    const setPlayer = useSetRecoilState(addPlayer)

    useEffect(() => ref.current?.focus(), [ref])

    return (
        <form
            className="flex flex-col md:flex-row gap-5 max-w-xs items-center"
            onSubmit={(e) => {
                e.preventDefault()
                setPlayer({ id: makeId(), name: value })
                callback()
            }}
        >
            <input
                className="col-span-2 min-w-full"
                type="text"
                ref={ref}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button type="submit" className="max-w-[50%]">
                {i18n('button.add')}
            </button>
        </form>
    )
}
