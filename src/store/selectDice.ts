import { dicesSelected, updateDicesSelected } from "@store/dicesSelected"

export function selectDice(diceIndex: number) {
    const all = [...dicesSelected.value]
    const index = all.indexOf(diceIndex)

    if (index !== -1) {
        all.splice(index, 1)
    } else if (all.length !== 4) {
        all.push(diceIndex)
    }
    updateDicesSelected(all)
}
