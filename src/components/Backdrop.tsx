import type { FC } from "react"
import cx from "classnames"

interface BackdropProps {
    onClick?(): void
    className?: string | undefined
}

export const Backdrop: FC<BackdropProps> = ({ onClick, className = "bg-white/70 dark:bg-black/80" }) => (
    <div onClick={onClick} className={cx("fixed md:absolute inset-0 z-10", className)} />
)
