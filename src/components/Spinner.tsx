import icon from "@icons/icon.svg"
import { isDark } from "@store/theme"

export function Spinner() {
    return (
        <div className="absolute inset-0 flex justify-center items-center">
            <div
                className="animate-spin w-20 h-20 rounded-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url('${icon}#spinner${isDark.value ? "-white" : ""}')` }}
            />
        </div>
    )
}
