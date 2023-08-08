import type { FC } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { Avatar, players } from "../../atoms"
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { i18n } from "../../helpers/i18n/i18n"
import { InputWithError } from "../InputWithError"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { AvatarChooser } from "./AvatarChooser"

interface EditNameProps {
    id: string
    callback(flash?: boolean): void
}

export const EditName: FC<EditNameProps> = ({ id, callback }) => {
    const { name, avatar: avatarInitial } = useRecoilValue(players(id))
    const [avatar, setAvatar] = useState(avatarInitial)
    const setPlayer = useSetRecoilState(players(id))
    const [inputValue, setInputValue] = useState<string>(name)
    const [error, setError] = useState<null | string>(null)

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }, [setInputValue])

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const trimmed = inputValue.trim()
        if (trimmed !== "" && avatar !== avatarInitial) {
            setPlayer((prev) => ({
                ...prev,
                name: inputValue,
                avatar,
            }))
            callback(true)
        } else {
            setError(i18n("required"))
        }
    }, [inputValue, setPlayer, callback, setError, avatar, avatarInitial])

    const onCancel = useCallback(() => callback(false), [callback])

    const edit = useCallback((index: Avatar) => {
        setAvatar(index)
        setPlayer((prev) => ({
            ...prev,
            avatar: index,
        }))
        callback(true)
    }, [setAvatar, setPlayer, callback])

    const disabled = inputValue === name && avatar === avatarInitial

    return (
        <>
            <AvatarChooser edit={edit} avatar={avatar} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <KeyboardActions actions={{ Escape: onCancel }} />
                <InputWithError
                    placeholder={i18n("enterName")}
                    value={inputValue}
                    onChange={onInputChange}
                    error={error}
                />
                <ButtonWithIcon type="submit" icon="save" disabled={disabled} />
                <ButtonWithIcon icon="close" onClick={onCancel} />
            </form>
        </>
    )
}
