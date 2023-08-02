import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useCallback } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { dicesAtom, dicesSelectedAtom, isMoveAvailable, loadingAtom, MAX_SHOT_COUNT, playerMoveAtom } from "../../atoms"
import casinoIcon from "../../icons/casino.svg"
import { rand } from "../../helpers/random"

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export const DicesActions: FC = () => {
    const [loading, setLoading] = useRecoilState(loadingAtom)
    const [dicesSelected, setDicesSelected] = useRecoilState(dicesSelectedAtom)
    const [dices, setDices] = useRecoilState(dicesAtom)
    const [[, shot], setPlayerMove] = useRecoilState(playerMoveAtom)
    const isMove = useRecoilValue(isMoveAvailable)

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

                    // TODO
                    // addToHistoryThunk()

                    setLoading(false)
                },
                d < defaultDelay ? defaultDelay - d : 0,
            )
        }
    }, [loading, setLoading, dices, setDices, dicesSelected, setPlayerMove])

    const deselectAll = useCallback(() => {
        setDicesSelected([])
    }, [setDicesSelected])

    return (
        <div className="mb-6 justify-center flex gap-5">
            <button
                type="button"
                onMouseUp={shuffleUp}
                onMouseDown={shuffle}
                disabled={isMove}
                className="!pl-10 bg-no-repeat bg-[8px_center]"
                style={{ backgroundImage: `url(${casinoIcon})` }}
            >
                {isMove ? i18n('button.writeDownYourPoints') : (
                    <>
                        {i18n('button.dropDices')}
                        <span className="ml-2 text-red-600">
                            {shot}
                            <span className="text-gray-500 dark:text-gray-300 font-bold"> / {MAX_SHOT_COUNT}</span>
                        </span>
                    </>
                )}
            </button>
            <button type="button" onClick={deselectAll} disabled={dicesSelected.length === 0 || isMove}>
                {i18n('button.reset')}
            </button>
        </div>
    )
}
