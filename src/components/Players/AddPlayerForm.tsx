import type { ChangeEvent, FC, FormEvent } from "react"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { addPlayer, addPlayerFormVisible, getAvailableAvatar, getRandomDogName } from "../../atoms"
import { ItemWrap } from "./ItemWrap"
import { InputWithError } from "../InputWithError"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { AvatarChooser } from "./AvatarChooser"

interface AddPlayerFormProps {
    initial?: boolean
}

export const AddPlayerForm: FC<AddPlayerFormProps> = ({ initial }) => {
    const ref = useRef<null | HTMLInputElement>(null)
    const [name, setName] = useState(useRecoilValue(getRandomDogName))
    const [error, setError] = useState<null | string>(null)
    const setPlayer = useSetRecoilState(addPlayer)
    const closeAddPlayerForm = useSetRecoilState(addPlayerFormVisible)

    const [avatar, setAvatar] = useState(useRecoilValue(getAvailableAvatar))

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(null)
    }, [setName, setError])

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const trimmed = name.trim()
        if (trimmed !== "") {
            setPlayer({ name: trimmed, avatar })
            closeAddPlayerForm(false)
        } else {
            setError(i18n("required"))
        }
    }, [setPlayer, closeAddPlayerForm, setError, name, avatar])

    const onCancel = useCallback(() => closeAddPlayerForm(false), [closeAddPlayerForm])

    useEffect(() => ref.current?.focus(), [ref])

    return (
        <ItemWrap>
            <KeyboardActions actions={{ Escape: onCancel }} />
            <AvatarChooser edit={setAvatar} avatar={avatar} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <InputWithError
                    placeholder={i18n("enterName")}
                    value={name}
                    onChange={onChange}
                    error={error}
                />
                <ButtonWithIcon type="submit" icon="add" />
                <ButtonWithIcon
                    type="button"
                    icon="close"
                    disabled={initial}
                    onClick={onCancel}
                />
            </form>
        </ItemWrap>
    )
}
