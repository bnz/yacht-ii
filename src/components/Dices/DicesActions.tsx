import { i18n } from "@helpers/i18n"
import { useCallback } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { dicesAtom, dicesSelectedAtom, MAX_SHOT_COUNT } from "../../recoil/atoms"
import { rand } from "@helpers/random"
import { ButtonWithIcon } from "../ButtonWithIcon"
import cx from "classnames"
import { historyUpdateDicesSelector } from "../../recoil/selectors/historyUpdateDicesSelector"
import { Dev } from "../Dev/Dev"
import { activePlayerShot } from "@signals/players/activePlayerShot"
import { isShotAvailable } from "@signals/players/isShotAvailable"
import { updatePlayerMove } from "@signals/players/playerMove"
import { loading, updateLoading } from "@signals/loading"

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export function DicesActions() {
    const [dicesSelected, setDicesSelected] = useRecoilState(dicesSelectedAtom)
    const [dices, setDices] = useRecoilState(dicesAtom)
    const history = useSetRecoilState(historyUpdateDicesSelector)

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
                    setDices(randDices)
                    updatePlayerMove(function ([playerId, shot]) {
                        return [playerId, shot + 1]
                    })
                    history(true)
                    updateLoading(false)
                },
                d < defaultDelay ? defaultDelay - d : 0,
            )
        }
    }, [dices, setDices, dicesSelected, history])

    const deselectAll = useCallback(function () {
        setDicesSelected([])
    }, [setDicesSelected])

    return (
        <div className={cx(
            "relative",
            "justify-center flex gap-5 transition-all duration-300",
            isShotAvailable.value ? "h-0 overflow-hidden" : "mb-6 py-3",
        )}>
            <Dev />
            <ButtonWithIcon
                onMouseUp={shuffleUp}
                onMouseDown={shuffle}
                disabled={isShotAvailable.value}
                className="!pl-10 !bg-[8px_center] flex"
                icon="casino"
            >
                {isShotAvailable.value ? i18n('button.writeDownYourPoints') : (
                    <>
                        {i18n('button.dropDices')}
                        <span className="ml-2 text-red-600 w-12 block">
                            {activePlayerShot.value}
                            <span className="text-gray-500 dark:text-gray-300 font-bold"> / {MAX_SHOT_COUNT}</span>
                        </span>
                    </>
                )}
            </ButtonWithIcon>
            <button type="button" onClick={deselectAll} disabled={dicesSelected.length === 0 || isShotAvailable.value}>
                {i18n('button.reset')}
            </button>
        </div>
    )
}
