import type { PropsWithChildren } from "react"
import cx from "classnames"

type Props = PropsWithChildren<{ className?: string, underline?: boolean }>

export function P({ children, className, underline }: Props) {
    return (
        <p className={cx(
            "mb-3 font-thin",
            className,
            underline && "underline underline-offset-4 decoration-1",
        )}>
            {children}
        </p>
    )
}
