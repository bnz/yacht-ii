import { ButtonWithIcon } from "../ButtonWithIcon"
import { useCallback } from "react"
import { useRecoilValue } from "recoil"
import { getRandomDogNameBySex } from "../../recoil/atoms"

interface RandomNameButtonProps {
    callback(value: string): void
}

export function RandomNameButton({ callback }: RandomNameButtonProps) {
    const getName = useRecoilValue(getRandomDogNameBySex)
    const onClick = useCallback(function () {
        callback(getName())
    }, [callback, getName])

    return (
        <ButtonWithIcon
            icon="refresh"
            className="!bg-transparent !shadow-none !py-5 absolute top-1/2 -translate-y-1/2 right-0"
            onClick={onClick}
        />
    )
}
