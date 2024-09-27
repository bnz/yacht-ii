import { i18n } from "@helpers/i18n"
import { useCallback } from "react"
import { MAX_SHOT_COUNT } from "../../recoil/atoms"
import { rand } from "@helpers/random"
import { ButtonWithIcon } from "../ButtonWithIcon"
import cx from "classnames"
import { Dev } from "../Dev/Dev"
import { players } from "@store/players/players"
import { loading, updateLoading } from "@store/loading"
import { dices as dicesSignal } from "@store/dices"
import { history } from "@store/history"
import { createCopy } from "@helpers/createCopy"

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export function DicesActions() {
    const dices = dicesSignal.value
    const dicesSelected = dicesSignal.selected.value

    const shuffle = useCallback(function () {
        delay = Date.now()
        updateLoading(true)
        if (timer !== null) {
            window.clearTimeout(timer)
        }
    }, [])

    const shuffleUp = useCallback(function () {
        if (loading.value) {
            const d = Date.now() - delay
            timer = window.setTimeout(
                function () {
                    let randDices = createCopy(dices)
                    dices.forEach(function (item, index) {
                        if (dicesSelected.indexOf(index) === -1) {
                            randDices[index] = rand()
                        }
                    })
                    dicesSignal.update(randDices)
                    players.move.update(function ([playerId, shot]) {
                        return [playerId, shot + 1]
                    })
                    history.updateDices()
                    updateLoading(false)
                },
                d < defaultDelay ? defaultDelay - d : 0,
            )
        }
    }, [dices, dicesSelected])

    const deselectAll = useCallback(function () {
        dicesSignal.selected.reset()
    }, [])

    return (
        <div className="relative transition-all duration-300 h-16 mb-2 md:mb-6">
            <Dev />
            <ButtonWithIcon
                onMouseUp={shuffleUp}
                onMouseDown={shuffle}
                disabled={players.isShotAvailable}
                className={cx(
                    "!pl-10 !bg-[8px_center] flex text-xl !rounded-2xl",
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                    "whitespace-nowrap",
                    "after:!rounded-2xl",
                )}
                icon="casino"
            >
                {players.isShotAvailable ? i18n('button.writeDownYourPoints') : (
                    <>
                        {i18n('button.dropDices')}
                        <span className="ml-2 text-red-600 w-12 block">
                            {players.activeShot}
                            <span className="text-gray-500 dark:text-gray-300 font-bold"> / {MAX_SHOT_COUNT}</span>
                        </span>
                    </>
                )}
            </ButtonWithIcon>
            <ButtonWithIcon
                icon="close"
                onClick={deselectAll}
                className={cx(
                    (dicesSelected.length === 0 || players.isShotAvailable)
                        ? "animate-fadeIn"
                        : "animate-fadeOut",
                    "absolute left-1/2 top-1/2",
                    "w-11 h-11 !rounded-full",
                )}
                style={{ transform: "translate(-50%, -50%) translateX(-160px)" }}
            />
        </div>
    )
}
