import { useTheme } from "../../../helpers/useTheme"

export function DiceDot({ filled }: { filled?: boolean }) {
    const isDark = useTheme(true)

    return (
        <div className="flex items-center justify-center min-w-[.6em]">
            <div
                className="w-[80%] h-[80%] rounded-full"
                style={{
                    boxShadow: filled && isDark ? "inset 0 0 .1em rgba(0, 0, 0, .8)" : "none",
                    background: filled ? isDark ? "#ccc" : "var(--text-color)" : "transparent",
                }}
            />
        </div>
    )
}
