import { i18n } from "@helpers/i18n"
import { useCallback } from "react"
import { MAX_SHOT_COUNT } from "../../recoil/atoms"
import { rand } from "@helpers/random"
import { ButtonWithIcon } from "../ButtonWithIcon"
import cx from "classnames"
import { Dev } from "../Dev/Dev"
import { players } from "@store/players/players"
import { loading, updateLoading } from "@store/loading"
import { dicesSelected as dicesSelectedSignal, updateDicesSelected } from "@store/dicesSelected"
import { dices as dicesSignal, updateDices } from "@store/dices"
import { historyUpdateDices } from "@store/history"

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export function DicesActions() {
    const dicesSelected = dicesSelectedSignal.value
    const dices = dicesSignal.value

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
                    let randDices = [...dices]
                    dices.forEach(function (item, index) {
                        if (dicesSelected.indexOf(index) === -1) {
                            randDices[index] = rand()
                        }
                    })
                    updateDices(randDices)
                    players.move.update(function ([playerId, shot]) {
                        return [playerId, shot + 1]
                    })
                    historyUpdateDices()
                    updateLoading(false)
                },
                d < defaultDelay ? defaultDelay - d : 0,
            )
        }
    }, [dices, dicesSelected])

    const deselectAll = useCallback(function () {
        updateDicesSelected([])
    }, [])

    return (
        <div className={cx(
            "relative",
            "justify-center flex gap-5 transition-all duration-300",
            players.isShotAvailable ? "h-0 overflow-hidden" : "mb-6 py-3",
        )}>
            <Dev />
            <ButtonWithIcon
                onMouseUp={shuffleUp}
                onMouseDown={shuffle}
                disabled={players.isShotAvailable}
                className="!pl-10 !bg-[8px_center] flex"
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
            <button type="button" onClick={deselectAll} disabled={dicesSelected.length === 0 || players.isShotAvailable}>
                {i18n('button.reset')}
            </button>
        </div>
    )
}
