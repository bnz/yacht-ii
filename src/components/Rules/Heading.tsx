import { forwardRef, PropsWithChildren } from "react"
import cx from "classnames"

type HeadingProps = PropsWithChildren<{
    className?: string
}>

export const Heading = forwardRef<null, HeadingProps>(function ({ children, className }, ref) {
    return (
        <h3 ref={ref} className={cx("font-bold mt-2 mb-5", className)}>
            {children}
        </h3>
    )
})
