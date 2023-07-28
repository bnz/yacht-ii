import type { FC, PropsWithChildren } from "react"

export const ListWrap: FC<PropsWithChildren<{}>> = ({ children }) => (
    <ul className="mb-5 md:w-full border-gray-200 dark:border-gray-700 border rounded px-2 shadow">
        {children}
    </ul>
)
