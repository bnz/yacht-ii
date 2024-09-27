import { PropsWithChildren } from "react"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import cx from "classnames"
import { Backdrop } from "../Backdrop"
import { ButtonWithIcon } from "../ButtonWithIcon"

type CombinationTitleProps = PropsWithChildren<{
    onClose: VoidFunction
}>

export function CombinationTitle({ children, onClose }: CombinationTitleProps) {
    return (
        <>
            <KeyboardActions actions={{ Escape: onClose }} />
            <Backdrop onClick={onClose} />
            <div
                className={cx(
                    "not-italic font-medium",
                    "fixed",
                    "left-1/2 -translate-y-1/2",
                    "top-1/2 -translate-x-1/2",
                    "max-w-7xl w-80 bg-[--background-color] shadow-2xl z-50 p-5 cursor-auto",
                    "border border-[--line-color] rounded",
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
}
