import type { PropsWithChildren } from "react"
import cx from "classnames"

interface CombinationButtonProps {
    onClick(): void
    buttonClassName: string
    innerClassName: string
}

export function CombinationButton({ onClick, innerClassName, buttonClassName, children }: PropsWithChildren<CombinationButtonProps>) {
    return (
        <button type="button" onClick={onClick} data-empty={true} className={buttonClassName}>
            <div className={cx(
                "rounded-2xl animate-pulse shadow-2xl flex justify-center items-center h-12 mx-1",
                innerClassName,
            )}>
                {children}
            </div>
        </button>
    )
}
