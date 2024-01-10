import { Backdrop } from "../Backdrop"
import cx from "classnames"
import { winner } from "@store/winner"
import { i18n } from "@helpers/i18n"
import { MAX_POSSIBLE_POINTS } from "../Combinations/combinationsData"
import { defineWorkEnding } from "@helpers/defineWorkEnding"
import { Avatar } from "../Players/Avatar"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { Pyro } from "../Pyro/Pyro"
import { restartGame } from "@store/restartGame"
import { toggleEndOfGameVisibility, endOfGameVisibility, updateEndOfGameVisibility } from "@store/endOfGameVisibility"

export function EndOfGame() {

    if (winner.value === null || !endOfGameVisibility.value) {
        return null
    }

    return (
        <>
            <KeyboardActions actions={{
                Escape() {
                    updateEndOfGameVisibility(false)
                },
            }} />
            <Backdrop className="z-50 dark:bg-black/50 backdrop-blur" />
            <Pyro />
            <div
                className="fixed left-1/2 top-1/2 lg:top-1/3 z-[52] -translate-y-1/2 -translate-x-1/2 w-[96%] md:w-2/3"
            >
                <h1 className="text-center text-4xl md:text-7xl mb-7 md:mb-14">
                    {i18n("gameOver")}
                </h1>
                <h3 className="text-center text-2xl md:text-5xl mb-7 md:mb-14">
                    {i18n('winner')}
                </h3>
                <div className="text-center -mt-12 md:-mt-20">
                    <Avatar avatar={winner.value.avatar} className="!w-64 !h-64 z-10 inline-block" />
                    <div className="-mt-8 text-3xl mb-1 md:mb-3">
                        {winner.value.name}
                    </div>
                    <div className="text-xl mb-7 md:mb-14 before:content-['('] after:content-[')']">
                        {winner.value.total} {defineWorkEnding(winner.value.total)}
                    </div>
                </div>

                <div className={cx(
                    "text-center mb-7 md:mb-14 flex flex-col md:flex-row gap-3 md:gap-5 justify-center w-1/2 md:w-full mx-auto",
                )}>
                    <button type="button" onClick={restartGame}>
                        {i18n("button.goHome")}
                    </button>
                    <button type="button">
                        {i18n("button.restartGame")}
                    </button>
                    <button type="button" onClick={toggleEndOfGameVisibility}>
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
