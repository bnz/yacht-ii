import type { PropsWithChildren } from "react"
import cx from "classnames"

export function DicesWrapper({ children }: PropsWithChildren<{}>) {
    return (
        <div className={cx(
            "bg-[--background-color]",
            "z-50",
            "fixed md:sticky",
            "left-0 md:left-auto",
            "right-0 md:right-auto",
            "bottom-0 md:bottom-auto",
            "md:top-0",
            "overflow-hidden",
            "order-2 md:order-1",
            "shadow-[0_-5px_15px_rgba(0,0,0,0.3)] md:shadow-none",
            "md:mb-6 mt-6 md:mt-0",
            "pb-6 md:p-0",
        )}>
            {children}
        </div>
    )
}
