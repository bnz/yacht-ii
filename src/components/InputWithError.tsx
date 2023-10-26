import type { PropsWithChildren } from "react"
import { ChangeEvent, useEffect, useRef } from "react"
import { ErrorLabel } from "./ErrorLabel"
import cx from "classnames"

interface InputWithErrorProps extends PropsWithChildren<{}> {
    value: string
    onChange(e: ChangeEvent<HTMLInputElement>): void
    placeholder?: string
    error?: string | null
    className?: string | undefined
}

export function InputWithError({ value, onChange, placeholder, error, className }: InputWithErrorProps) {
    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(function () {
        ref.current?.focus()
        ref.current?.select()
    }, [ref])

    return (
        <div className={cx("flex-1 relative", className)}>
            <input
                className="w-full"
                ref={ref}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <ErrorLabel>
                {error}
            </ErrorLabel>
        </div>
    )
}
