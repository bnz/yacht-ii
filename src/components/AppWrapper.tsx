import type { PropsWithChildren } from "react"
import cx from "classnames"
import { useEffect, useRef } from "react"
import { scrolledTo } from "../recoil/atoms/scrolledTo"
import { useSetRecoilState } from "recoil"

export function AppWrapper({ children }: PropsWithChildren<{}>) {
    const ref = useRef<HTMLDivElement | null>(null)
    const scrolled = useSetRecoilState(scrolledTo)

    useEffect(function () {
        const curr = ref.current

        const fn = function (e: Event) {
            // @ts-ignore
            const top = e.target.scrollTop
            scrolled(top > 60 && top <= 570 ? "logo" : top > 570 ? "button" : null)
        }
        if (curr) {
            curr.addEventListener("scroll", fn, true)
        }

        return function () {
            curr?.removeEventListener("scroll", fn, true)
        }
    }, [ref, scrolled])

    return (
        <div ref={ref} className={cx(
            "w-full lg:w-[1000px] mx-auto lg:shadow-2xl lg:rounded",
            "lg:overflow-auto",
            "scroll-smooth",
            "lg:absolute lg:top-10 lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2",
        )}>
            {children}
        </div>
    )
}
