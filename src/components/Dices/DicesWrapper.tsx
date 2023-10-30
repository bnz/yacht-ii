import { PropsWithChildren } from "react"

export function DicesWrapper({ children }: PropsWithChildren<{}>) {
    return (
        <div className="backdrop-blur-lg sticky top-0 shadow-lg dark:shadow-2xl z-10">
            {children}
        </div>
    )
}
