import React, { forwardRef, PropsWithChildren } from "react"
import cx from "classnames"

export const Heading = forwardRef<null, PropsWithChildren<{ className?: string }>>(({ children, className }, ref) => (
    <h3 className={cx("font-bold mt-2 mb-5", className)}>
        {children}
    </h3>
))
