import React, { FC, PropsWithChildren } from "react"
import cx from "classnames"

export const P: FC<PropsWithChildren<{ className?: string, underline?: boolean }>> = ({
    children,
    className,
    underline,
}) => (
    <p className={cx(
        "mb-3 font-thin",
        className,
        underline && "underline underline-offset-4 decoration-1",
    )}>
        {children}
    </p>
)
