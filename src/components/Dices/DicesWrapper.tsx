import type { PropsWithChildren } from "react"
import cx from "classnames"

export function DicesWrapper({ children }: PropsWithChildren<{}>) {
    return (
        <div className={cx(
            "bg-[--background-color] sticky top-0 z-10 overflow-hidden mb-6",
            "shadow-lg dark:shadow-2xl md:shadow-none",
        )}>
            {children}
        </div>
    )
}
