import { FC } from 'react'
import { useTheme } from "../../../helpers/useTheme"

interface DotProps {
    filled?: boolean
}

export const DiceDot: FC<DotProps> = ({ filled,  }) => {
    const isDark = useTheme() === 'dark'

    return (
        <div className="flex items-center justify-center min-w-[.6em]">
            <div
                className="w-[80%] h-[80%] rounded-full"
                style={{
                    boxShadow: filled && isDark ? "inset 0 0 .1em rgba(0, 0, 0, .8)" : "none",
                    background: filled ? isDark ? "#ccc" : "#000" : "transparent",
                }}
            />
        </div>
    )
}
