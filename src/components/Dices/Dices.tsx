import type { FC } from "react"
import { Dice } from "./Dice/Dice"
import { DicesWrapper } from "./DicesWrapper"

export type DicesType = number[]

const dices: DicesType = [-1, -1, -1, -1, -1]

const dicesSelected: DicesType = []

const selectDice = (diceIndex: number) => {
}

const loading = false

export const Dices: FC = () => {

    console.log({ dices })

    return (
        <DicesWrapper>
            {dices.map((dice, index) => {
                const selected = dicesSelected.indexOf(index) !== -1
                const onClick = () => {
                    if (dice !== -1) {
                        selectDice(index)
                    }
                }

                return (
                    <Dice
                        key={index}
                        value={dice}
                        selected={selected}
                        roll={!selected && loading}
                        onClick={onClick}
                    />
                )
            })}
        </DicesWrapper>
    )
}
