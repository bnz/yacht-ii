import type { PropsWithChildren } from "react"

export function ItemWrap({ children }: PropsWithChildren<{}>) {
    return (
        <li className="relative border-gray-100 dark:border-gray-700 box-border border-b last:border-b-0 flex gap-3 h-14 py-2 px-3">
            {children}
        </li>
    )
}
