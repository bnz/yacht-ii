import { Combinations } from '../Combinations/Combinations'
import { childCombinations } from "../Combinations/combinationsData"
import { DicesWrapper } from "../Dices/DicesWrapper"
import { Dices } from "../Dices/Dices"
import { DicesActions } from "../Dices/DicesActions"
import { EndOfGame } from "../EndOfGame/EndOfGame"
import { useSignals } from "@preact/signals-react/runtime"

export default function ChildPlay() {
    useSignals()

    return (
        <>
            <DicesWrapper>
                <Dices />
                <DicesActions />
            </DicesWrapper>
            <Combinations combinations={childCombinations} />
            <EndOfGame />
        </>
    )
}
