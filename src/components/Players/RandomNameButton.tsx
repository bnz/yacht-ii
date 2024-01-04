import { ButtonWithIcon } from "../ButtonWithIcon"
import { useCallback } from "react"
import { getDogName } from "../../recoil/atoms"

interface RandomNameButtonProps {
    callback(value: string): void
}

export function RandomNameButton({ callback }: RandomNameButtonProps) {
    return (
        <ButtonWithIcon
            icon="refresh"
            className="!bg-transparent !shadow-none !py-5 absolute top-1/2 -translate-y-1/2 right-0"
            onClick={useCallback(function () {
                callback(getDogName())
            }, [callback])}
        />
    )
}
