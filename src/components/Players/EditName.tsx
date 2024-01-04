import { AvatarEnum } from "../../recoil/atoms"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { i18n } from "@helpers/i18n"
import { InputWithError } from "../InputWithError"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { RandomNameButton } from "./RandomNameButton"
import { players } from "@signals/players/players"
import { updatePlayerById } from "@signals/players/updaters/updatePlayerById"

interface EditNameProps {
    id: string
    callback(flash?: boolean): void
}

export function EditName({ id, callback }: EditNameProps) {
    const { name, avatar: avatarInitial } = players.value[id]
    const [avatar, setAvatar] = useState(avatarInitial)
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
            updatePlayerById(id, { name: inputValue, avatar })
            callback(true)
        } else {
            setError(i18n("required"))
        }
    }, [id, inputValue, callback, setError, avatar])

    const onCancel = useCallback(function () {
        callback(false)
    }, [callback])

    const editAvatar = useCallback(function (index: AvatarEnum) {
        setAvatar(index)
        updatePlayerById(function (players) {
            players[id] = { ...players[id], avatar: index }
            return players
        })
        callback(true)
    }, [setAvatar, id, callback])

    const disabled = inputValue === name && avatar === avatarInitial

    return (
        <>
            <Avatar edit={editAvatar} avatar={avatar} />
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
