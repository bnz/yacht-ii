import type { FC, PropsWithChildren } from "react"
import cx from "classnames"

export const ListWrap: FC<PropsWithChildren<{}>> = ({ children }) => (
    <ul className={cx(
        "mb-5 md:w-full md:rounded shadow",
        "lg:border-l lg:border-r border-b border-t",
        "border-gray-200 dark:border-gray-700",
    )}>
        {children}
    </ul>
)
