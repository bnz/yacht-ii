import type { PropsWithChildren } from "react"
import cx from "classnames"

export function DicesWrapper({ children }: PropsWithChildren<{}>) {
    return (
        <div className={cx(
            "bg-[--background-color]",
            "sticky z-10 overflow-hidden",
            "bottom-0 md:bottom-auto md:top-0",
            "order-2 md:order-1",

            // "shadow-lg dark:shadow-2xl md:shadow-none",
            "md:mb-6 mt-6 md:mt-0",
            // "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]",
        )}>
            {children}
        </div>
    )
}
