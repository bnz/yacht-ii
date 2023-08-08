import type { FC, PropsWithChildren } from "react"
import cx from "classnames"
import { useTheme } from "../helpers/useTheme"
import iconSVG from "../icons/icon.svg"
import { Icons } from "../icons/Icons"

interface ButtonWithIconProps extends PropsWithChildren<{}> {
    type?: "button" | "submit"
    className?: string
    icon: Icons
    onClick?(): void
    onMouseUp?(): void
    onMouseDown?(): void
    disabled?: boolean
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({
    children,
    type = "button",
    className,
    icon,
    disabled,
    onClick,
    onMouseUp,
    onMouseDown,
}) => (
    <button
        className={cx("bg-no-repeat bg-center", className)}
        style={{ backgroundImage: `url(${iconSVG}#${icon}${useTheme(true) ? "-white" : ""})` }}
        {...type ? { type } : {}}
        onClick={onClick}
        {...onMouseUp ? { onMouseUp } : {}}
        {...onMouseDown ? { onMouseDown } : {}}
        {...disabled ? { disabled } : {}}
    >
        {children}
    </button>
)
