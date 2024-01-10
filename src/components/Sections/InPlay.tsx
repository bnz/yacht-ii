import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { Combinations } from "../Combinations/Combinations"
// import { ActivePlayerAvatar } from "../ActivePlayerAvatar"
import { EndOfGame } from "../EndOfGame/EndOfGame"
import { i18n } from "@helpers/i18n"
import { combinationsData } from '../Combinations/combinationsData'
import { DicesWrapper } from "../Dices/DicesWrapper"
import { useSignals } from "@preact/signals-react/runtime"
import { endOfGameVisibility, updateEndOfGameVisibility } from "@store/endOfGameVisibility"
import { winner } from "@store/winner"

export function EndOfGamePlaceholder() {
    if (winner.value === null && endOfGameVisibility.value) {
        return null
    }

    return (
        <div className="absolute inset-0 bg-[--background-color] flex justify-center items-center">
            <button type="button" className="text-3xl !px-10 !py-3" onClick={function () {
                updateEndOfGameVisibility(true)
            }}>
                {i18n("button.showEndOfGame")}
            </button>
        </div>
    )
}

export default function InPlay() {
    useSignals()

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
