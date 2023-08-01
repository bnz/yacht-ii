import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useCallback } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { dicesSelected, loading as loadingAtom, MAX_SHOT_COUNT } from "../../atoms"
import casinoIcon from "../../icons/casino.svg"

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export const DicesActions: FC = () => {
    const [loading, setLoading] = useRecoilState(loadingAtom)
    const setDicesSelected = useSetRecoilState(dicesSelected)

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
                    // dispatch(generateRandomDicesThunk())


                    // const { dices, dicesSelected } = getState()
                    // let randDices = [...dices]
                    //
                    // dices.forEach((item, index) => {
                    //     if (dicesSelected.indexOf(index) === -1) {
                    //         randDices[index] = rand()
                    //     }
                    // })
                    //
                    // dispatch(increaseShot())
                    // dispatch(generateRandomDices(randDices))
                    // dispatch(addToHistoryThunk())

                    setLoading(false)
                },
                d < defaultDelay ? defaultDelay - d : 0,
            )
        }
    }, [loading, setLoading])

    return (
        <div className="mb-6 justify-center flex gap-5">
            <button
                type="button"
                onMouseUp={shuffleUp}
                onMouseDown={shuffle}
                disabled={false} // TODO
                className="!pl-10 bg-no-repeat bg-[8px_center]"
                style={{
                    backgroundImage: `url(${casinoIcon})`,
                }}
            >
                {i18n('button.dropDices')}
                <span className="ml-2 text-[#ffcdd2]">
                    {1}
                    <span className="text-[#757575] font-bold"> / {MAX_SHOT_COUNT}</span>
                </span>
            </button>
            <button
                type="button"
                onClick={() => {
                    setDicesSelected([])
                }}
            >
                {i18n('button.reset')}
            </button>
        </div>
    )
}
