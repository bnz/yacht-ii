import { Backdrop } from "../Backdrop"
import cx from "classnames"
import icon from "@icons/icon.svg"
import { isDark } from "@store/theme"
import { Tabs } from "@components/Players/Tabs"

type AvatarChooserProps = {
    toggle: VoidFunction
    avatar: string
    onClick(avatar: string): void
}

export function AvatarChooser({ avatar, toggle, onClick }: AvatarChooserProps) {
    return (
        <>
            <Backdrop onClick={toggle} />
            <div className={cx(
                "w-[calc(100%-24px)] md:w-[800px] z-10",
                "rounded shadow",
                "object-center",
                "bg-[--background-color]",
                "flex flex-col",
                "pb-5",
            )}>
                <button
                    onClick={toggle}
                    className="absolute right-0 top-0 w-8 h-8 bg-no-repeat bg-center"
                    style={{ backgroundImage: `url('${icon}#close${isDark.value ? "-white" : ""}')` }}
                />
                <Tabs avatar={avatar} onClick={onClick} />
            </div>
        </>
    )
}
