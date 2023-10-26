import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
// import { ActivePlayerAvatar } from "../ActivePlayerAvatar"
import { EndOfGame } from "../EndOfGame/EndOfGame"
import { useRecoilState, useRecoilValue } from "recoil"
import { winnerSelector } from "../../recoil/selectors/winner"
import cx from "classnames"
import { i18n } from "../../helpers/i18n/i18n"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"

export function EndOfGamePlaceholder() {
    const winner = useRecoilValue(winnerSelector)
    const [open, setOpen] = useRecoilState(endOfGameVisibilityAtom)

    if (winner === null && open) {
        return null
    }

    return (
        <div className={cx(
            "absolute inset-0",
            "bg-[--background-color]",
            "flex justify-center items-center",
        )}>
            <button type="button" className="text-3xl !px-10 !py-3" onClick={function () {
                setOpen(true)
            }}>
                {i18n("button.showEndOfGame")}
            </button>
        </div>
    )
}

export default function InPlay() {
    return (
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
}
