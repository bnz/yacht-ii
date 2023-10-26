import cx from "classnames"
import { useRecoilState } from "recoil"
import { drawerState } from "../../recoil/atoms"
import { useCallback } from "react"
import { useTheme } from "../../helpers/useTheme"
import icon from "../../icons/icon.svg"

export function MenuButton() {
    const [open, setOpen] = useRecoilState(drawerState)
    const toggle = useCallback(function () {
        setOpen(function (prev) {
            return !prev
        })
    }, [setOpen])
    const isDark = useTheme(true)
    const bgImage = `url('${icon}#${open
        ? isDark ? "close-white" : "close"
        : isDark ? "menu-white" : "menu"}')`

    return (
        <button
            onClick={toggle}
            style={{
                backgroundImage: bgImage,
                // animationFillMode: "forwards",
            }}
            className={cx(
                "z-10 w-10 h-10 fixed lg:top-6 lg:left-6 bottom-5 right-5 rounded",
                "bg-no-repeat bg-center bg-cover",
                "animate-button",
            )}
        />
    )
}
