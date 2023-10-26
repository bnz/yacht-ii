import type { PropsWithChildren } from "react"

export function ListWrap({ children }: PropsWithChildren<{}>) {
    return (
        <ul className="mb-5 md:w-full md:rounded shadow lg:border-l lg:border-r border-b border-t border-gray-200 dark:border-gray-700">
            {children}
        </ul>
    )
}
