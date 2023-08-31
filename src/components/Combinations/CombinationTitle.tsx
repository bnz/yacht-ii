import { FC, PropsWithChildren, useEffect, useState } from "react"
import { useOutsideClick } from "../../helpers/useOutsideClick"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import cx from "classnames"
import { Backdrop } from "../Backdrop"
import { combinationsWrapperRefAtom } from "../../recoil/atoms/combinationsWrapperRef"
import { useRecoilValue } from "recoil"

export const CombinationTitle: FC<PropsWithChildren<{ onClose: VoidFunction }>> = ({ children, onClose }) => {
    const ref = useOutsideClick(onClose)
    const combinationsWrapperRef = useRecoilValue(combinationsWrapperRefAtom)
    const [bottom, setBottom] = useState<boolean>(false)

    useEffect(() => {
        if (ref.current && combinationsWrapperRef) {
            const { top: wrapperTop, height: wrapperHeight } = combinationsWrapperRef.getBoundingClientRect()
            const { top, height } = ref.current.getBoundingClientRect()
            const el = top + height
            const wrapper = wrapperTop + wrapperHeight
            const view = window.screen.height
            setBottom(wrapper > view ? view < el : wrapper < el)
        }
    }, [ref, combinationsWrapperRef, setBottom])

    return (
        <>
            <KeyboardActions actions={{ Escape: onClose }} />
            <Backdrop className="bg-black/20 dark:bg-black/30" />
            <div
                ref={ref}
                className={cx(
                    "not-italic font-medium",
                    bottom ? "bottom-2" : "top-2",
                    "absolute left-2",
                    "max-w-7xl w-80 bg-[var(--background-color)] shadow-2xl z-10 p-5 cursor-auto",
                    "border border-[var(--line-color)] rounded",
                )}
            >
                {children}
            </div>
        </>
    )
}
