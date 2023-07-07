import type { FC, PropsWithChildren } from "react"

// position: 'relative',
// minHeight: '100%',
// userSelect: 'none',
// padding: spacing(2),

export const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="relative min-h-full select-none p-4">
            {children}
        </div>
    )
}
