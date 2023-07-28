import type { FC, PropsWithChildren } from "react"
import cx from "classnames"

export const ItemWrap: FC<PropsWithChildren<{}>> = ({ children }) => (
    <li className={cx(
        "border-gray-100 dark:border-gray-800",
        "box-border border-b last:border-b-0",
        "flex items-center gap-3",
        "h-12",
    )}>
        {children}
    </li>
)
