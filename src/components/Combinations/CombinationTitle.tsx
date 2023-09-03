import { FC, PropsWithChildren } from "react"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import cx from "classnames"
import { Backdrop } from "../Backdrop"
import { ButtonWithIcon } from "../ButtonWithIcon"

type CombinationTitleProps = PropsWithChildren<{
    onClose: VoidFunction
}>

export const CombinationTitle: FC<CombinationTitleProps> = ({ children, onClose }) => (
    <>
        <KeyboardActions actions={{ Escape: onClose }} />
        <Backdrop className="bg-black/20 dark:bg-black/30" onClick={onClose} />
        <div
            className={cx(
                "not-italic font-medium",
                "fixed",
                "left-1/2 -translate-y-1/2",
                "top-1/2 -translate-x-1/2",
                "max-w-7xl w-80 bg-[var(--background-color)] shadow-2xl z-10 p-5 cursor-auto",
                "border border-[var(--line-color)] rounded",
            )}
        >
            <ButtonWithIcon
                onClick={onClose}
                className="absolute right-2 top-2 w-10 h-10 !shadow-none !bg-transparent"
                icon="close"
            />
            {children}
        </div>
    </>
)
