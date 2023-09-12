import type { FC } from "react"
import { Backdrop } from "../Backdrop"
import cx from "classnames"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { i18n } from "../../helpers/i18n/i18n"
import { MAX_POSSIBLE_POINTS } from "../Combinations/combinationsData"
import { winnerSelector } from "../../recoil/selectors/winner"
import { Avatar } from "../Players/Avatar"
import { defineWorkEnding } from "../../helpers/defineWorkEnding"
import { useCallback } from "react"
import { restartGame } from "../../recoil/atoms"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { Pyro } from "../Pyro/Pyro"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"

export const EndOfGame: FC = () => {
    const winner = useRecoilValue(winnerSelector)
    const [open, setOpen] = useRecoilState(endOfGameVisibilityAtom)
    const close = useCallback(() => setOpen(false), [setOpen])
    const restart = useSetRecoilState(restartGame)

    if (winner === null || !open) {
        return null
    }

    return (
        <>
            <KeyboardActions actions={{ Escape: close }} />
            <Backdrop className="z-50 dark:bg-black/50 backdrop-blur" />
            <Pyro />
            <div className={cx(
                "fixed left-1/2 top-1/2 lg:top-1/3 z-[52] -translate-y-1/2 -translate-x-1/2",
                "w-[96%] md:w-2/3",
            )}>
                <h1 className="text-center text-4xl md:text-7xl mb-7 md:mb-14">
                    {i18n("gameOver")}
                </h1>
                <h3 className="text-center text-2xl md:text-5xl mb-7 md:mb-14">
                    {i18n('winner')}
                </h3>
                <div className="text-center -mt-12 md:-mt-20">
                    <Avatar avatar={winner.avatar} className="!w-64 !h-64 z-10 inline-block" />
                    <div className="-mt-8 text-3xl mb-1 md:mb-3">
                        {winner.name}
                    </div>
                    <div className="text-xl mb-7 md:mb-14 before:content-['('] after:content-[')']">
                        {winner.total} {defineWorkEnding(winner.total)}
                    </div>
                </div>

                <div className={cx(
                    "text-center mb-7 md:mb-14 flex flex-col md:flex-row gap-3 md:gap-5 justify-center w-1/2 lg:w-full mx-auto",
                )}>
                    <button type="button" onClick={() => restart(true)}>
                        {i18n("button.goHome")}
                    </button>
                    <button type="button">
                        {i18n("button.restartGame")}
                    </button>
                    <button type="button" onClick={close}>
                        {i18n("button.returnToGame")}
                    </button>
                </div>
                <div className="text-center w-2/3 mx-auto">
                    {i18n('maximumPossibleNumberOfPoints')}: <b>{MAX_POSSIBLE_POINTS}</b>
                </div>
            </div>
        </>
    )
}
