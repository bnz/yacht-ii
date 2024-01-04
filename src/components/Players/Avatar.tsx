import type { Dispatch, SetStateAction } from "react"
import { useCallback } from "react"
import cx from "classnames"
import { AvatarEnum, MAX_PLAYERS_COUNT, playersData } from "../../recoil/atoms"

import dog0Black from "../../icons/dog0-black.svg"
import dog0BlackDisabled from "../../icons/dog0-black-disabled.svg"
import dog0White from "../../icons/dog0-white.svg"
import dog0WhiteDisabled from "../../icons/dog0-white-disabled.svg"
import dog1Black from "../../icons/dog1-black.svg"
import dog1BlackDisabled from "../../icons/dog1-black-disabled.svg"
import dog1White from "../../icons/dog1-white.svg"
import dog1WhiteDisabled from "../../icons/dog1-white-disabled.svg"
import dog2Black from "../../icons/dog2-black.svg"
import dog2BlackDisabled from "../../icons/dog2-black-disabled.svg"
import dog2White from "../../icons/dog2-white.svg"
import dog2WhiteDisabled from "../../icons/dog2-white-disabled.svg"
import dog3Black from "../../icons/dog3-black.svg"
import dog3BlackDisabled from "../../icons/dog3-black-disabled.svg"
import dog3White from "../../icons/dog3-white.svg"
import dog3WhiteDisabled from "../../icons/dog3-white-disabled.svg"
import icon from "../../icons/icon.svg"
import { useRecoilValue } from "recoil"
import { AvatarChooser } from "./AvatarChooser"
import { createPortal } from "react-dom"
import { useStateToggle } from '../../helpers/useStateToggle'
import { isDark, theme, Themes } from "@signals/theme"

const dogs: Record<Themes, Record<'normal' | 'disabled', string[]>> = {
    light: {
        normal: [dog0Black, dog1Black, dog2Black, dog3Black],
        disabled: [dog0BlackDisabled, dog1BlackDisabled, dog2BlackDisabled, dog3BlackDisabled],
    },
    dark: {
        normal: [dog0White, dog1White, dog2White, dog3White],
        disabled: [dog0WhiteDisabled, dog1WhiteDisabled, dog2WhiteDisabled, dog3WhiteDisabled],
    },
}

export function getDogs(): Record<'normal' | 'disabled', string[]> {
    return dogs[theme.value]
}

interface AvatarProps {
    avatar: AvatarEnum
    edit?: Dispatch<SetStateAction<AvatarEnum>> | ((index: AvatarEnum) => void)
    className?: string
    disabled?: boolean
}

export function Avatar({ avatar, edit, className, disabled }: AvatarProps) {
    const [open, toggle] = useStateToggle()
    const themedDogs = getDogs()
    const players = useRecoilValue(playersData)
    const takenAvatars = players.map(function ({ data: { avatar } }) {
        return avatar
    })
    const isMax = takenAvatars.length === MAX_PLAYERS_COUNT
    const canEdit = edit && !isMax
    const onClick = useCallback(function (index: AvatarEnum) {
        if (edit) {
            edit(index as AvatarEnum)
        }
        toggle()
    }, [edit, toggle])

    return (
        <>
            <div
                className={cx(
                    "border border-transparent",
                    canEdit ? "hover:border-[--text-color] cursor-pointer" : "-z-10",
                    "relative w-10 h-full",
                    "rounded-full",
                    "bg-no-repeat bg-[length:75%] bg-center",
                    className,
                )}
                style={{ backgroundImage: `url('${themedDogs[disabled ? "disabled" : "normal"][avatar]}')` }}
                onClick={toggle}
            >
                {canEdit && (
                    <div
                        className="w-4 h-4 absolute -bottom-1.5 -right-1.5 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url('${icon}#${isDark.value ? "down-white" : "down"}')` }}
                    />
                )}
            </div>
            {open && canEdit && createPortal(
                <AvatarChooser
                    avatar={avatar}
                    toggle={toggle}
                    onClick={onClick}
                />,
                document.body,
            )}
        </>
    )
}
