import type { ChangeEvent, FormEvent } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { i18n } from "@helpers/i18n"
import { getDogName } from "../../recoil/atoms"
import { ItemWrap } from "./ItemWrap"
import { InputWithError } from "../InputWithError"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { ButtonWithIcon } from "../ButtonWithIcon"
import { Avatar } from "./Avatar"
import { RandomNameButton } from "./RandomNameButton"
import { addPlayer } from "@signals/players/updaters/addPlayer"
import { getAvailableAvatar } from "@signals/players/helpers/getAvailableAvatar"
import { updateEditingInProgress } from "@signals/editingInProgress"
import { updateAddPlayerFormVisible } from "@signals/addPlayerFormVisible"

interface AddPlayerFormProps {
    initial?: boolean
}

export function AddPlayerForm({ initial }: AddPlayerFormProps) {
    const ref = useRef<null | HTMLInputElement>(null)
    const [name, setName] = useState(getDogName())
    const [error, setError] = useState<null | string>(null)
    const [avatar, setAvatar] = useState(getAvailableAvatar())

    const onChange = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value)
        setError(null)
    }, [setName, setError])

    const onSubmit = useCallback(function (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const trimmed = name.trim()
        if (trimmed !== "") {
            addPlayer({ name: trimmed, avatar })
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

    useEffect(function () {
        ref.current?.focus()
    }, [ref])

    return (
        <ItemWrap>
            <KeyboardActions actions={{ Escape: onCancel }} />
            <Avatar edit={setAvatar} avatar={avatar} />
            <form className="flex-1 flex gap-3" onSubmit={onSubmit}>
                <div className="w-full relative">
                    <InputWithError
                        placeholder={i18n("enterName")}
                        value={name}
                        onChange={onChange}
                        error={error}
                        className="[&>input]:pr-9"
                    />
                    <RandomNameButton callback={setName} />
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
