import { isDark } from "@store/theme"

export function DiceDot({ filled }: { filled?: boolean }) {
    return (
        <div className="flex items-center justify-center min-w-[.6em]">
            <div
                className="w-[80%] h-[80%] rounded-full"
                style={{
                    boxShadow: filled && isDark.value ? "inset 0 0 .1em rgba(0, 0, 0, .8)" : "none",
                    background: filled ? isDark.value ? "#ccc" : "var(--text-color)" : "transparent",
                }}
            />
        </div>
    )
}
