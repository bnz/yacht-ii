import type { FC } from "react"
import cx from "classnames"

interface BackdropProps {
    onClick(): void
}

export const Backdrop: FC<BackdropProps> = ({ onClick }) => (
    <div onClick={onClick} className={cx(
        "fixed top-0 left-0 right-0 bottom-0 bg-black/50 dark:bg-black/80",
    )} />
)
