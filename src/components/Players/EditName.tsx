import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { i18n } from "@helpers/i18n"
import { InputWithError } from "../InputWithError"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { RandomNameButton } from "./RandomNameButton"
import { players } from "@store/players/players"
import { getRandomName } from "@store/getRandomName"
import { dogIconIds } from "@helpers/getWarIcons"

interface EditNameProps {
    id: string
    callback(flash?: boolean): void
}

export function EditName({ id, callback }: EditNameProps) {
    const { name, avatar: avatarInitial } = players.getById(id)
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
            players.update(id, { name: inputValue, avatar })
            callback(true)
        } else {
            setError(i18n("required"))
        }
    }, [id, inputValue, callback, setError, avatar])

    const onCancel = useCallback(function () {
        callback(false)
    }, [callback])

    const editAvatar = useCallback(function (avatar: string) {
        setAvatar(avatar)
        players.update(function (players) {
            players[id] = { ...players[id], avatar }
            return players
        })
        callback(true)
    }, [setAvatar, id, callback])

    const setRandomName = useCallback(function () {
        setInputValue(getRandomName(dogIconIds.indexOf(avatar) !== -1))
    }, [setInputValue, avatar])

    const disabled = inputValue === name && avatar === avatarInitial

    return (
        <>
            <KeyboardActions actions={{ Escape: onCancel }} />
            <Avatar edit={editAvatar} avatar={avatar} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <div className="w-full relative">
                    <InputWithError
                        placeholder={i18n("enterName")}
                        value={inputValue}
                        onChange={onInputChange}
                        error={error}
                    />
                    <RandomNameButton callback={setRandomName} />
                </div>
                <ButtonWithIcon type="submit" icon="save" disabled={disabled} />
                <ButtonWithIcon icon="close" onClick={onCancel} />
            </form>
        </>
    )
}
