import type { PropsWithChildren } from "react"
import cx from "classnames"
import { useEffect, useRef } from "react"
import { update } from "@store/scrolledTo"

export function AppWrapper({ children }: PropsWithChildren<{}>) {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(function () {
        const curr = ref.current

        const fn = function (e: Event) {
            // @ts-ignore
            const top = e.target.scrollTop
            update(top > 60 && top <= 570 ? "logo" : top > 570 ? "button" : null)
        }
        if (curr) {
            curr.addEventListener("scroll", fn, true)
        }

        return function () {
            curr?.removeEventListener("scroll", fn, true)
        }
    }, [ref])

    return (
        <div ref={ref} className={cx(
            "w-full lg:w-[1000px] mx-auto",
            // "lg:shadow-2xl lg:rounded",
            "scroll-smooth",
            "flex flex-col",
            // "lg:absolute lg:top-10 lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2",

            "lg:overflow-auto",
            "lg:absolute lg:top-0 lg:bottom-0",
            "lg:left-1/2 lg:-translate-x-1/2",

        )}>
            {children}
        </div>
    )
}
