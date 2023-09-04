import type { FC, PropsWithChildren } from "react"
import cx from "classnames"

export const AppWrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className={cx(
        "w-full lg:w-[1000px] mx-auto lg:shadow-2xl lg:rounded",
        "lg:overflow-auto",
        "scroll-smooth",
        "lg:absolute lg:top-10 lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2",
    )}>
        {children}
    </div>
)
