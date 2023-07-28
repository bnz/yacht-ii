import type { FC } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { players } from "../../atoms"
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { i18n } from "../../helpers/i18n/i18n"
import { InputWithError } from "../InputWithError"

interface EditNameProps {
    id: string
    callback(flash?: boolean): void
}

export const EditName: FC<EditNameProps> = ({ id, callback }) => {
    const { name } = useRecoilValue(players(id))
    const setPlayer = useSetRecoilState(players(id))
    const [inputValue, setInputValue] = useState<string>(name)
    const [error, setError] = useState<null | string>(null)

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }, [setInputValue])

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const trimmed = inputValue.trim()
        if (trimmed !== "") {
            setPlayer((prev) => ({ ...prev, name: inputValue }))
            callback(true)
        } else {
            setError(i18n("required"))
        }
    }, [inputValue, setPlayer, callback, setError])

    return (
        <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
            <KeyboardActions actions={{ Escape: callback }} />
            <InputWithError
                className=""
                placeholder={i18n("Enter name*")}
                value={inputValue}
                onChange={onInputChange}
                error={error}
            />
            <button type="submit" disabled={inputValue === name}>
                {i18n("save")}
            </button>
            <button type="button" onClick={() => callback()}>
                {i18n("button.cancel")}
            </button>
        </form>
    )
}
