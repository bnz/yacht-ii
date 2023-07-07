import type { FC, PropsWithChildren } from "react"

export const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="relative min-h-full select-none p-4 max-w-6xl mx-auto">
        {children}
    </div>
)
