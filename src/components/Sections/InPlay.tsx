import type { FC } from "react"
import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
// import { ActivePlayerAvatar } from "../ActivePlayerAvatar"
import { EndOfGame, endOfGameVisibilityAtom } from "../EndOfGame/EndOfGame"
import { useRecoilState, useRecoilValue } from "recoil"
import { winnerSelector } from "../../recoil/selectors/winner"
import cx from "classnames"
import { i18n } from "../../helpers/i18n/i18n"

export const EndOfGamePlaceholder: FC = () => {
    const winner = useRecoilValue(winnerSelector)
    const [open, setOpen] = useRecoilState(endOfGameVisibilityAtom)

    if (winner === null && open) {
        return null
    }

    return (
        <div className={cx(
            "absolute inset-0",
            "bg-[var(--background-color)]",
            "flex justify-center items-center",
        )}>
            <button type="button" className="text-3xl !px-10 !py-3" onClick={() => setOpen(true)}>
                {i18n("button.showEndOfGame")}
            </button>
        </div>
    )
}

export const InPlay: FC = () => (
    <>
        <div className="backdrop-blur-lg sticky top-0 shadow-lg dark:shadow-2xl z-10">
            {/*<ActivePlayerAvatar />*/}
            <Dices />
            <DicesActions />
            <EndOfGamePlaceholder />
        </div>
        <Combinations />
        <EndOfGame />
    </>
)
