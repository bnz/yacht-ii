import type { FC } from "react"
import closeIconUrl from "../../icons/close.svg"
import closeWhiteIconUrl from "../../icons/close-white.svg"
import menuIconUrl from "../../icons/menu.svg"
import menuWhiteIconUrl from "../../icons/menu-white.svg"
import cx from "classnames"
import { useRecoilState } from "recoil"
import { drawerState } from "../../atoms"
import { useCallback } from "react"
import { useTheme } from "../../helpers/useTheme"

export const MenuButton: FC = () => {
    const [open, setOpen] = useRecoilState(drawerState)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const isDark = useTheme() === "dark"

    return (
        <button
            onClick={toggle}
            style={{
                backgroundImage: `url('${open
                    ? isDark ? closeWhiteIconUrl : closeIconUrl
                    : isDark ? menuWhiteIconUrl : menuIconUrl}')`,
            }}
            className={cx(
                "w-10 h-10 fixed md:top-5 md:left-5 bottom-5 right-5 rounded",
                "bg-no-repeat bg-center bg-cover",
                open ? "" : "",
            )}
        />
    )
}
