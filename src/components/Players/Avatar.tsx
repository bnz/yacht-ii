import type { Dispatch, SetStateAction } from "react"
import { useCallback } from "react"
import cx from "classnames"
import icon from "@icons/icon.svg"
import { AvatarChooser } from "./AvatarChooser"
import { createPortal } from "react-dom"
import { useStateToggle } from '@helpers/useStateToggle'
import { isDark, theme } from "@store/theme"
import { warIcons } from "@helpers/getWarIcons"

interface AvatarProps {
    avatar: string
    edit?: Dispatch<SetStateAction<string>> | ((index: string) => void)
    className?: string
    disabled?: boolean
}

export function Avatar({ avatar, edit, className, disabled }: AvatarProps) {
    const [open, toggle] = useStateToggle(false)
    const onClick = useCallback(function (avatarId: string) {
        if (edit) {
            edit(avatarId)
        }
        toggle()
    }, [edit, toggle])

    return (
        <>
            <div
                className={cx(
                    "border border-transparent",
                    edit ? "hover:border-[--text-color] cursor-pointer" : "-z-10",
                    "relative w-10 h-full",
                    "rounded-full",
                    "bg-no-repeat bg-[length:75%] bg-center",
                    className,
                )}
                style={{ backgroundImage: `url('${warIcons[avatar]}#${theme.value}${disabled ? "-disabled" : ""}')` }}
                onClick={toggle}
            >
                {edit && (
                    <div
                        className="w-4 h-4 absolute -bottom-1.5 -right-1.5 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url('${icon}#${isDark.value ? "down-white" : "down"}')` }}
                    />
                )}
            </div>
            {open && edit && createPortal(
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
