import type { Dispatch, FC, SetStateAction } from "react"
import { Themes, useTheme } from "../../helpers/useTheme"
import { useCallback, useState } from "react"
import { Backdrop } from "../parts/Backdrop"
import { createPortal } from "react-dom"
import { i18n } from "../../helpers/i18n/i18n"
import cx from "classnames"

import dog0White from "../../icons/dog0-white.svg"
import dog0Black from "../../icons/dog0-black.svg"
import dog1White from "../../icons/dog1-white.svg"
import dog1Black from "../../icons/dog1-black.svg"
import dog2White from "../../icons/dog2-white.svg"
import dog2Black from "../../icons/dog2-black.svg"
import dog3White from "../../icons/dog3-white.svg"
import dog3Black from "../../icons/dog3-black.svg"
import { Avatar, MAX_PLAYERS_COUNT, playersData } from "../../atoms"
import icon from "../../icons/icon.svg"
import { useRecoilValue } from "recoil"

const dogs: Record<Themes, string[]> = {
    light: [dog0Black, dog1Black, dog2Black, dog3Black],
    dark: [dog0White, dog1White, dog2White, dog3White],
}

export const useDogs = (): string[] => dogs[useTheme() as Themes]

interface AvatarChooserProps {
    avatar: Avatar
    edit?: Dispatch<SetStateAction<Avatar>> | ((index: Avatar) => void)
}

export const AvatarChooser: FC<AvatarChooserProps> = ({ avatar, edit }) => {
    const isDart = useTheme(true)
    const [open, setOpen] = useState<boolean>(false)
    const toggle = useCallback(() => setOpen((prevState) => !prevState), [setOpen])
    const themedDogs = useDogs()
    const players = useRecoilValue(playersData)

    const takenAvatars = players.map(({ data: { avatar } }) => avatar)

    const isMax = takenAvatars.length === MAX_PLAYERS_COUNT


    return (
        <>
            <div
                className={cx(
                    "border border-transparent -z-10",
                    edit && !isMax && "hover:border-[var(--text-color)] cursor-pointer",
                    "relative w-10 h-full",
                    "rounded-full",
                    "bg-no-repeat bg-[length:75%] bg-center",
                )}
                style={{ backgroundImage: `url('${themedDogs[avatar]}')` }}
                {...edit && !isMax ? { onClick: toggle } : {}}
            >
                {edit && !isMax && (
                    <div
                        className="w-4 h-4 absolute -bottom-1.5 -right-1.5 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url('${icon}#${isDart ? "down-white" : "down"}')` }}
                    />
                )}
            </div>
            {open && edit && !isMax && createPortal(
                <>
                    <Backdrop onClick={toggle} />
                    <div className={cx(
                        "w-[calc(100%-24px)] md:w-[800px] z-10",
                        "rounded shadow",
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                        "bg-[var(--background-color)]",
                        "flex flex-col",
                        "pb-5",
                    )}>
                        <button
                            onClick={toggle}
                            className="absolute right-0 top-0 w-8 h-8 bg-no-repeat bg-center"
                            style={{ backgroundImage: `url('${icon}#${isDart ? "close-white" : "close"}')` }}
                        />
                        <h3 className="text-center font-bold py-5">
                            {i18n("Выбирите собачку")}
                        </h3>
                        <ul className="flex flex-grow flex-wrap gap-5 justify-center">
                            {themedDogs.map((url, index) => {
                                const selected = avatar === index
                                const taken = takenAvatars.includes(index)

                                return (
                                    <li
                                        key={url}
                                        className={cx(
                                            "dark:border-[rgba(255,255,255,0.08)]",
                                            "border-2 bg-no-repeat bg-center bg-[length:70%]",
                                            "w-40 h-40",
                                            "rounded-full",
                                            !selected && !taken && "cursor-pointer",
                                            selected && "border-[var(--text-color)] dark:border-[var(--text-color)]",
                                            taken && !selected
                                                ? cx(
                                                    "relative !border-transparent",
                                                    "after:absolute after:content-[''] after:block",
                                                    "after:inset-0 after:bg-gray-300/90 after:dark:bg-gray-800/90",
                                                    "after:rounded-full",
                                                )
                                                : cx(
                                                    "hover:border-[var(--text-color)]",
                                                    "hover:shadow-inner",
                                                ),
                                        )}
                                        style={{ backgroundImage: `url('${url}')` }}
                                        {...!selected && !taken ? {
                                            onClick() {
                                                edit(index as Avatar)
                                                toggle()
                                            },
                                        } : {}}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </>,
                document.body,
            )}
        </>
    )
}
