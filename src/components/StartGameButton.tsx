import { editingInProgress, playersData, startGameSelector } from "../recoil/atoms"
import { i18n } from "../helpers/i18n/i18n"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useCallback } from "react"
import { ButtonWithIcon } from "./ButtonWithIcon"
import cx from "classnames"

export function StartGameButton() {
    const players = useRecoilValue(playersData)
    const startGame = useSetRecoilState(startGameSelector)
    const onClick = useCallback(function () {
        startGame(true)
    }, [startGame])
    const inProgress = useRecoilValue(editingInProgress)
    const disabled = players.length <= 0 || inProgress

    return (
        <ButtonWithIcon
            icon="casino"
            disabled={disabled}
            onClick={onClick}
            className={cx(
                "my-10 text-3xl !py-5 !pl-24 !pr-10 inline-block mx-auto",
                "!bg-[24px_center] bg-[length:50px_50px]",
                "[&:not([disabled])]:animate-pulse hover:animate-none",
            )}
        >
            {i18n('button.startGame')}
        </ButtonWithIcon>
    )
}
