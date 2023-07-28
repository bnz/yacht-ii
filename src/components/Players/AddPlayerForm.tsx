import type { ChangeEvent, FC, FormEvent } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSetRecoilState } from "recoil"
import { addPlayer, addPlayerFormVisible } from "../../atoms"
import { makeId } from "../../helpers/makeId"
import { ItemWrap } from "./ItemWrap"
import { InputWithError } from "../InputWithError"
import { KeyboardActions } from "../../helpers/KeyboardActions"

export const AddPlayerForm: FC = () => {
    const ref = useRef<null | HTMLInputElement>(null)
    const [value, setValue] = useState("")
    const [error, setError] = useState<null | string>(null)
    const setPlayer = useSetRecoilState(addPlayer)
    const closeAddPlayerForm = useSetRecoilState(addPlayerFormVisible)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(null)
    }, [setValue, setError])

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const trimmed = value.trim()
        if (trimmed !== "") {
            setPlayer({ id: makeId(), data: { name: value } })
            closeAddPlayerForm(false)
        } else {
            setError(i18n("required"))
        }
    }, [setPlayer, closeAddPlayerForm, setError, value])

    const onCancel = useCallback(() => {
        closeAddPlayerForm(false)
    }, [closeAddPlayerForm])

    useEffect(() => ref.current?.focus(), [ref])

    return (
        <ItemWrap>
            <KeyboardActions actions={{ Escape: onCancel }} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <InputWithError
                    placeholder={i18n("Enter name*")}
                    value={value}
                    onChange={onChange}
                    error={error}
                />
                <button type="submit">{i18n('button.add')}</button>
                <button type="button" onClick={onCancel}>
                    {i18n('button.cancel')}
                </button>
            </form>
        </ItemWrap>
    )
}
