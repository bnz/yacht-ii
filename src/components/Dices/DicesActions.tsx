import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useCallback } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
    dicesAtom,
    dicesSelectedAtom,
    isShotAvailable,
    loadingAtom,
    MAX_SHOT_COUNT,
} from "../../recoil/atoms"
import { rand } from "../../helpers/random"
import { ButtonWithIcon } from "../ButtonWithIcon"
import cx from "classnames"
import { playerMoveAtom } from "../../recoil/atoms/players/playerMove"
import { historyUpdateDicesSelector } from "../../recoil/selectors/historyUpdateDicesSelector"
import { Dev } from "../Dev/Dev"

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export const DicesActions: FC = () => {
    const [loading, setLoading] = useRecoilState(loadingAtom)
    const [dicesSelected, setDicesSelected] = useRecoilState(dicesSelectedAtom)
    const [dices, setDices] = useRecoilState(dicesAtom)
    const [[, shot], setPlayerMove] = useRecoilState(playerMoveAtom)
    const isShot = useRecoilValue(isShotAvailable)
    const history = useSetRecoilState(historyUpdateDicesSelector)

    const shuffle = useCallback(() => {
        delay = Date.now()
        setLoading(true)
        if (timer !== null) {
            window.clearTimeout(timer)
        }
    }, [setLoading])

    const shuffleUp = useCallback(() => {
        if (loading) {
            const d = Date.now() - delay
            timer = window.setTimeout(
                () => {
                    let randDices = [...dices]
                    dices.forEach((item, index) => {
                        if (dicesSelected.indexOf(index) === -1) {
                            randDices[index] = rand()
                        }
                    })
                    setDices(randDices)
                    setPlayerMove(([playerId, shot]) => [playerId, shot + 1])
                    history(true)
                    setLoading(false)
                },
                d < defaultDelay ? defaultDelay - d : 0,
            )
        }
    }, [loading, setLoading, dices, setDices, dicesSelected, setPlayerMove, history])

    const deselectAll = useCallback(() => setDicesSelected([]), [setDicesSelected])

    return (
        <div className={cx(
            "relative",
            "justify-center flex gap-5 transition-all duration-300",
            isShot ? "h-0 overflow-hidden" : "mb-6 py-3",
        )}>
            <Dev />
            <ButtonWithIcon
                onMouseUp={shuffleUp}
                onMouseDown={shuffle}
                disabled={isShot}
                className="!pl-10 !bg-[8px_center] flex"
                icon="casino"
            >
                {isShot ? i18n('button.writeDownYourPoints') : (
                    <>
                        {i18n('button.dropDices')}
                        <span className="ml-2 text-red-600 w-12 block">
                            {shot}
                            <span className="text-gray-500 dark:text-gray-300 font-bold"> / {MAX_SHOT_COUNT}</span>
                        </span>
                    </>
                )}
            </ButtonWithIcon>
            <button type="button" onClick={deselectAll} disabled={dicesSelected.length === 0 || isShot}>
                {i18n('button.reset')}
            </button>
        </div>
    )
}
