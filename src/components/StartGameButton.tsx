import { gamePhase, GamePhases, startGameSelector } from "../recoil/atoms"
import { i18n } from "../helpers/i18n/i18n"
import { DefaultValue, selector, useRecoilValue, useSetRecoilState } from "recoil"
import { useCallback } from "react"
import { ButtonWithIcon } from "./ButtonWithIcon"
import cx from "classnames"
import { startGameButtonDisabledSelector } from '../recoil/selectors/startGameButtonDisabledSelector'
import { childPlayAtom } from '../recoil/atoms/childPlayAtom'
import { nextTurnSelector } from '../recoil/selectors/nextTurnSelector'

const asd = selector<boolean>({
    key: "asd",
    get() {
        throw new Error("asd: use only as setter")
    },
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            const child = get(childPlayAtom)
            set(nextTurnSelector, true)
            set(gamePhase, child ? GamePhases.CHILD_PLAY : GamePhases.IN_PLAY)
        }
    },
})

export function StartGameButton() {
    const disabled = useRecoilValue(startGameButtonDisabledSelector)
    const onClick = useSetRecoilState(asd)

    return (
        <ButtonWithIcon
            icon="casino"
            disabled={disabled}
            onClick={function () {
                onClick(true)
            }}
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
