import cx from "classnames"

interface BackdropProps {
    onClick?(): void
    className?: string | undefined
}

export function Backdrop({ onClick, className = "bg-white/70 dark:bg-black/80" }: BackdropProps) {
    return (
        <div onClick={onClick} className={cx("fixed md:absolute inset-0 z-10", className)} />
    )
}
