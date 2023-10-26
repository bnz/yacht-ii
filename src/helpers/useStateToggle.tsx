import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useState } from 'react'

export function useStateToggle(initialState: boolean = false): [state: boolean, toggle: VoidFunction, setter: Dispatch<SetStateAction<boolean>>] {
    const [open, setOpen] = useState<boolean>(initialState)

    return [
        open,
        useCallback(function () {
            setOpen(function (prevState) {
                return !prevState
            })
        }, [setOpen]),
        setOpen,
    ]
}
