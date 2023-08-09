import type { FC, PropsWithChildren } from "react"
import cx from "classnames"

export const ItemWrap: FC<PropsWithChildren<{}>> = ({ children }) => (
    <li className={cx(
        "relative",
        "border-gray-100 dark:border-gray-700",
        "box-border border-b last:border-b-0",
        "flex",
        "gap-3",
        "h-14",
        "py-2",
        "px-3"
    )}>
        {children}
    </li>
)
