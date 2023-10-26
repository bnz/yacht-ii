import type { PropsWithChildren } from "react"

export function ErrorLabel({ children }: PropsWithChildren<{}>) {
    if (!children) {
        return null
    }

    return (
        <div className="absolute left-3 -bottom-4 py-0 px-2 bg-red-600 text-white rounded animate-pulse text-xs">
            {children}
        </div>
    )
}
