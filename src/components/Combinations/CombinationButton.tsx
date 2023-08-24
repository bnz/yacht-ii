import type { FC, PropsWithChildren } from "react"
import cx from "classnames"

interface CombinationButtonProps {
    onClick(): void
    buttonClassName: string
    innerClassName: string
}

export const CombinationButton: FC<PropsWithChildren<CombinationButtonProps>> = ({
    onClick,
    innerClassName,
    buttonClassName,
    children,
}) => (
    <button type="button" onClick={onClick} data-empty={true} className={buttonClassName}>
        <div className={cx(
            "rounded animate-pulse shadow-2xl flex justify-center items-center h-12 mx-1",
            innerClassName,
        )}>
            {children}
        </div>
    </button>
)
