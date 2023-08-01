import type { FC } from "react"
import { Dice } from "./Dice/Dice"
import { DicesWrapper } from "./DicesWrapper"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { dicesSelected as dicesSelectedAtom, loading as loadingAtom, selectDice } from "../../atoms"


export type DicesType = number[]

const dices: DicesType = [-1, -1, -1, -1, -1]

// const dicesSelected: DicesType = []

// const selectDice = (diceIndex: number) => {
//     console.log({ diceIndex })
// }


export const Dices: FC = () => {
    const loading = useRecoilValue(loadingAtom)
    const dicesSelected = useRecoilValue(dicesSelectedAtom)
    const doSelectDice = useSetRecoilState(selectDice)

    console.log(dicesSelected)

    return (
        <DicesWrapper>
            {dices.map((dice, index) => {
                const selected = dicesSelected.indexOf(index) !== -1

                return (
                    <Dice
                        key={index}
                        value={dice}
                        selected={selected}
                        roll={!selected && loading}
                        onClick={() => {
                            doSelectDice(index)
                        }}
                    />
                )
            })}
        </DicesWrapper>
    )
}
