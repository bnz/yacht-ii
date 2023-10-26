import { i18n } from "../helpers/i18n/i18n"
import cx from "classnames"
import { Heading } from "./Rules/Heading"

export function GameHeading({ className }: { className?: string }) {
    return (
        <Heading className={cx(
            "text-5xl md:text-7xl lg:text-9xl font-thin text-center !mt-0",
            "sticky top-0 left-0 right-0",
            className,
        )}>
            {i18n("yacht")}
        </Heading>
    )
}
