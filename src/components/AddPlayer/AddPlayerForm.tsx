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
        <div className="grid grid-cols-2 gap-5 max-w-xs">
            <input
                className="col-span-2"
                type="text"
                ref={ref}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button onClick={callback}>
                {i18n('button.cancel')}
            </button>
            <button type="submit" onClick={() => {
                setPlayer({
                    id: makeId(),
                    name: value,
                })
                callback()
            }}>
                {i18n('button.add')}
            </button>
        </div>
    )
}
