import { FC, PropsWithChildren } from "react"
import { useOutsideClick } from "../../helpers/useOutsideClick"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import cx from "classnames"

export const CombinationTitle: FC<PropsWithChildren<{ onClose: VoidFunction }>> = ({ children, onClose }) => (
    <>
        <KeyboardActions actions={{ Escape: onClose }} />
        <div ref={useOutsideClick(onClose)}
            className={cx(
                "absolute left-2 top-2",
                "max-w-7xl w-56 bg-[var(--background-color)] shadow-2xl z-10 p-3 cursor-auto",
                "border border-[var(--line-color)] rounded",
            )}>
            {children}
        </div>
    </>
)
