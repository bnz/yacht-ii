import type { Dispatch, FC, SetStateAction } from "react"
import { Themes, useTheme } from "../../helpers/useTheme"
import { useCallback, useState } from "react"
import cx from "classnames"
import { AvatarEnum, MAX_PLAYERS_COUNT, playersData } from "../../atoms"

import dog0White from "../../icons/dog0-white.svg"
import dog0Black from "../../icons/dog0-black.svg"
import dog1White from "../../icons/dog1-white.svg"
import dog1Black from "../../icons/dog1-black.svg"
import dog2White from "../../icons/dog2-white.svg"
import dog2Black from "../../icons/dog2-black.svg"
import dog3White from "../../icons/dog3-white.svg"
import dog3Black from "../../icons/dog3-black.svg"
import icon from "../../icons/icon.svg"
import { useRecoilValue } from "recoil"
import { AvatarChooser } from "./AvatarChooser"
import { createPortal } from "react-dom"

const dogs: Record<Themes, string[]> = {
    light: [dog0Black, dog1Black, dog2Black, dog3Black],
    dark: [dog0White, dog1White, dog2White, dog3White],
}

export const useDogs = (): string[] => dogs[useTheme() as Themes]

interface AvatarProps {
    avatar: AvatarEnum
    edit?: Dispatch<SetStateAction<AvatarEnum>> | ((index: AvatarEnum) => void)
    className?: string
}

export const Avatar: FC<AvatarProps> = ({ avatar, edit, className }) => {
    const isDart = useTheme(true)
    const [open, setOpen] = useState<boolean>(false)
    const toggle = useCallback(() => setOpen((prevState) => !prevState), [setOpen])
    const themedDogs = useDogs()
    const players = useRecoilValue(playersData)
    const takenAvatars = players.map(({ data: { avatar } }) => avatar)
    const isMax = takenAvatars.length === MAX_PLAYERS_COUNT
    const canEdit = edit && !isMax
    const onClick = useCallback((index: AvatarEnum) => {
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
                    canEdit ? "hover:border-[var(--text-color)] cursor-pointer" : "-z-10",
                    "relative w-10 h-full",
                    "rounded-full",
                    "bg-no-repeat bg-[length:75%] bg-center",
                    className,
                )}
                style={{ backgroundImage: `url('${themedDogs[avatar]}')` }}
                onClick={toggle}
            >
                {canEdit && (
                    <div
                        className="w-4 h-4 absolute -bottom-1.5 -right-1.5 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url('${icon}#${isDart ? "down-white" : "down"}')` }}
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
