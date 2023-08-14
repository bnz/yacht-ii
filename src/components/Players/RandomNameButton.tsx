import type { FC } from "react"
import { ButtonWithIcon } from "../ButtonWithIcon"
import React, { useCallback } from "react"
import { useRecoilValue } from "recoil"
import { getRandomDogNameBySex } from "../../recoil/atoms"

interface RandomNameButtonProps {
    callback(value: string): void
}

export const RandomNameButton: FC<RandomNameButtonProps> = ({ callback }) => {
    const getName = useRecoilValue(getRandomDogNameBySex)

    return (
        <ButtonWithIcon
            icon="refresh"
            className="!bg-transparent !shadow-none !py-5 absolute top-1/2 -translate-y-1/2 right-0"
            onClick={useCallback(() => callback(getName()), [callback, getName])}
        />
    )
}
