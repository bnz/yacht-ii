import { PropsWithChildren } from "react"

export function DicesWrapper({ children }: PropsWithChildren<{}>) {
    return (
        // backdrop-blur-lg
        <div className="bg-[--background-color] sticky top-0 shadow-lg dark:shadow-2xl z-10">
            {children}
        </div>
    )
}
