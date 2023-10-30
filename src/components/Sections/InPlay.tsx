import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
// import { ActivePlayerAvatar } from "../ActivePlayerAvatar"
import { EndOfGame } from "../EndOfGame/EndOfGame"
import { useRecoilState, useRecoilValue } from "recoil"
import { winnerSelector } from "../../recoil/selectors/winner"
import { i18n } from "../../helpers/i18n/i18n"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"
import { combinationsData } from '../Combinations/combinationsData'
import { DicesWrapper } from "../Dices/DicesWrapper"

export function EndOfGamePlaceholder() {
    const winner = useRecoilValue(winnerSelector)
    const [open, setOpen] = useRecoilState(endOfGameVisibilityAtom)

    if (winner === null && open) {
        return null
    }

    return (
        <div className="absolute inset-0 bg-[--background-color] flex justify-center items-center">
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
            <DicesWrapper>
                {/*<ActivePlayerAvatar />*/}
                <Dices />
                <DicesActions />
                <EndOfGamePlaceholder />
            </DicesWrapper>
            <Combinations combinations={combinationsData} />
            <EndOfGame />
        </>
    )
}
