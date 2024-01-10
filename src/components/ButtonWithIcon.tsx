import type { PropsWithChildren } from "react"
import cx from "classnames"
import { isDark } from "@store/theme"
import iconSVG from "@icons/icon.svg"
import { Icons } from "@icons/Icons"

interface ButtonWithIconProps extends PropsWithChildren<{}> {
    type?: "button" | "submit"
    className?: string
    icon: Icons
    onClick?(): void
    onMouseUp?(): void
    onMouseDown?(): void
    disabled?: boolean
}

export function ButtonWithIcon({ children, type = "button", className, icon, disabled, onClick, onMouseUp, onMouseDown }: ButtonWithIconProps) {
    return (
        <button
            className={cx("bg-no-repeat bg-center", className)}
            style={{ backgroundImage: `url(${iconSVG}#${icon}${isDark.value ? "-white" : ""})` }}
            onClick={onClick}
            {...type ? { type } : {}}
            {...onMouseUp ? { onMouseUp } : {}}
            {...onMouseDown ? { onMouseDown } : {}}
            {...disabled ? { disabled } : {}}
        >
            {children}
        </button>
    )
}
