import cx from "classnames"
import { isDark } from "@store/theme"
import icon from "@icons/icon.svg"
import { drawer, toggle } from "@store/drawer"

export function MenuButton() {
    const open = drawer.value
    const bgImage = `url('${icon}#${
        open
            ? isDark.value ? "close-white" : "close"
            : isDark.value ? "menu-white" : "menu"
    }')`

    return (
        <button
            onClick={toggle}
            style={{
                backgroundImage: bgImage,
                // animationFillMode: "forwards",
            }}
            className={cx(
                "z-50 w-10 h-10 fixed lg:top-6 lg:left-6 bottom-11 right-5 rounded",
                "bg-no-repeat bg-center bg-cover",
                "animate-button",
            )}
        />
    )
}
