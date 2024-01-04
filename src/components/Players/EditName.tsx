import { useRecoilValue, useSetRecoilState } from "recoil"
import { AvatarEnum, players } from "../../recoil/atoms"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { i18n } from "@helpers/i18n"
import { InputWithError } from "../InputWithError"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { RandomNameButton } from "./RandomNameButton"

interface EditNameProps {
    id: string
    callback(flash?: boolean): void
}

export function EditName({ id, callback }: EditNameProps) {
    const { name, avatar: avatarInitial } = useRecoilValue(players(id))
    const [avatar, setAvatar] = useState(avatarInitial)
    const setPlayer = useSetRecoilState(players(id))
    const [inputValue, setInputValue] = useState<string>(name)
    const [error, setError] = useState<null | string>(null)

    const onInputChange = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.currentTarget.value)
        setError(null)
    }, [setInputValue, setError])

    const onSubmit = useCallback(function (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const trimmed = inputValue.trim()
        if (trimmed !== "") {
            setPlayer(function (prev) {
                return {
                    ...prev,
                    name: inputValue,
                    avatar,
                }
            })
            callback(true)
        } else {
            setError(i18n("required"))
        }
    }, [inputValue, setPlayer, callback, setError, avatar])

    const onCancel = useCallback(function () {
        callback(false)
    }, [callback])

    const edit = useCallback(function (index: AvatarEnum) {
        setAvatar(index)
        setPlayer(function (prev) {
            return {
                ...prev,
                avatar: index,
            }
        })
        callback(true)
    }, [setAvatar, setPlayer, callback])

    const disabled = inputValue === name && avatar === avatarInitial

    return (
        <>
            <Avatar edit={edit} avatar={avatar} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <KeyboardActions actions={{ Escape: onCancel }} />
                <div className="w-full relative">
                    <InputWithError
                        placeholder={i18n("enterName")}
                        value={inputValue}
                        onChange={onInputChange}
                        error={error}
                    />
                    <RandomNameButton callback={setInputValue} />
                </div>
                <ButtonWithIcon type="submit" icon="save" disabled={disabled} />
                <ButtonWithIcon icon="close" onClick={onCancel} />
            </form>
        </>
    )
}
