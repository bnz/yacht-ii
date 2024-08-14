import type { ChangeEvent, FormEvent } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { i18n } from "@helpers/i18n"
import { ItemWrap } from "./ItemWrap"
import { InputWithError } from "../InputWithError"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { RandomNameButton } from "./RandomNameButton"
import { players } from "@store/players/players"
import { updateEditingInProgress } from "@store/editingInProgress"
import { updateAddPlayerFormVisible } from "@store/addPlayerFormVisible"
import { getRandomName } from "@store/getRandomName"
import { dogIconIds } from "@helpers/getWarIcons"

interface AddPlayerFormProps {
    initial?: boolean
}

export function AddPlayerForm({ initial }: AddPlayerFormProps) {
    const ref = useRef<null | HTMLInputElement>(null)
    const [avatar, setAvatar] = useState<string>(players.availableAvatar)
    const [name, setName] = useState(getRandomName(dogIconIds.indexOf(avatar) !== -1))
    const [error, setError] = useState<null | string>(null)

    const onChange = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value)
        setError(null)
    }, [setName, setError])

    const onSubmit = useCallback(function (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const trimmed = name.trim()
        if (trimmed !== "") {
            players.add({ name: trimmed, avatar })
            updateAddPlayerFormVisible(false)
            updateEditingInProgress(false)
        } else {
            setError(i18n("required"))
        }
    }, [setError, name, avatar])

    const onCancel = useCallback(function () {
        updateAddPlayerFormVisible(false)
        updateEditingInProgress(false)
    }, [])

    const edit = useCallback(function (avatarId: string) {
        setAvatar(avatarId)
        setName(getRandomName(dogIconIds.indexOf(avatarId) !== -1))
    }, [])

    const setRandomName = useCallback(function () {
        setName(getRandomName(dogIconIds.indexOf(avatar) !== -1))
    }, [setName, avatar])

    useEffect(function () {
        ref.current?.focus()
    }, [ref])

    return (
        <ItemWrap>
            <KeyboardActions actions={{ Escape: onCancel }} />
            <Avatar edit={edit} avatar={avatar} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <div className="w-full relative">
                    <InputWithError
                        placeholder={i18n("enterName")}
                        value={name}
                        onChange={onChange}
                        error={error}
                        className="[&>input]:pr-9"
                    />
                    <RandomNameButton onClick={setRandomName} />
                </div>
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
