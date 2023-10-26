import cx from 'classnames'
import icon from "../icons/icon.svg"
import { useTheme } from '../helpers/useTheme';

export function Spinner() {
    const isDark = useTheme(true)

    return (
        <div className={cx(
            "absolute inset-0 flex justify-center items-center"
        )}>
            <div className={cx(
                "animate-spin w-20 h-20 rounded-full",
                "bg-center bg-no-repeat bg-cover"
            )} style={{
                backgroundImage: `url('${icon}#spinner${isDark ? "-white" : ""}')`
            }} />
        </div>
    )
}