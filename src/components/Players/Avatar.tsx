import type { Dispatch, SetStateAction } from "react"
import { useCallback } from "react"
import cx from "classnames"
import { AvatarEnum, MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import icon from "@icons/icon.svg"
import { AvatarChooser } from "./AvatarChooser"
import { createPortal } from "react-dom"
import { useStateToggle } from '@helpers/useStateToggle'
import { isDark } from "@store/theme"
import { getDogs } from "@helpers/getDogs"
import { players } from "@store/players/players"

interface AvatarProps {
    avatar: AvatarEnum
    edit?: Dispatch<SetStateAction<AvatarEnum>> | ((index: AvatarEnum) => void)
    className?: string
    disabled?: boolean
}

export function Avatar({ avatar, edit, className, disabled }: AvatarProps) {
    const [open, toggle] = useStateToggle()
    const themedDogs = getDogs()
    const isMax = players.takenAvatars.length === MAX_PLAYERS_COUNT
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
