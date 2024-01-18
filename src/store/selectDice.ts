import { createCopy } from "@helpers/createCopy"
import { dices } from "@store/dices"

export function selectDice(diceIndex: number) {
    const all = createCopy(dices.selected.value)
    const index = all.indexOf(diceIndex)

    if (index !== -1) {
        all.splice(index, 1)
    } else if (all.length !== 4) {
        all.push(diceIndex)
    }
    dices.selected.update(all)
}
