import type { FC } from "react"
import { Backdrop } from "../parts/Backdrop"
import cx from "classnames"
import icon from "../../icons/icon.svg"
import { i18n } from "../../helpers/i18n/i18n"
import { AvatarEnum, playersData } from "../../recoil/atoms"
import { useDogs } from "./Avatar"
import { useRecoilValue } from "recoil"
import { useTheme } from "../../helpers/useTheme"

interface AvatarChooserProps {
    toggle: VoidFunction
    avatar: AvatarEnum
    onClick(index: AvatarEnum): void
}

export const AvatarChooser: FC<AvatarChooserProps> = ({ avatar, toggle, onClick }) => {
    const isDart = useTheme(true)
    const themedDogs = useDogs()
    const players = useRecoilValue(playersData)
    const takenAvatars = players.map(({ data: { avatar } }) => avatar)

    return (
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
                    {i18n("chooseDog")}
                </h3>
                <ul className="flex flex-grow flex-wrap gap-5 justify-center">
                    {themedDogs.normal.map((url, index) => {
                        const selected = avatar === index
                        const taken = takenAvatars.includes(index)
                        const isClickable = !selected && !taken
                        const player = players.find(({ data: { avatar } }) => avatar === index)

                        return (
                            <li key={url} className="text-center">
                                <div
                                    className={cx(
                                        "dark:border-[rgba(255,255,255,0.08)]",
                                        "border-2 bg-no-repeat bg-center bg-[length:70%]",
                                        "w-40 h-40",
                                        "rounded-full mb-2",
                                        isClickable && "cursor-pointer",
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
                                    {...isClickable ? { onClick: () => onClick(index) } : {}}
                                />
                                {player && player.data.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
