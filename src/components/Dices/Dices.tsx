import { Dice } from "./Dice/Dice"
import { players } from "@store/players/players"
import { loading } from "@store/loading"
import { dices } from "@store/dices"
import { selectDice } from "@store/selectDice"

export function Dices() {
    return (
        <div className="flex flex-nowrap justify-center overflow-hidden gap-[0.333em] text-3xl lg:text-4xl pt-8 pb-3">
            {dices.value.map(function (dice, index) {
                const selected = dices.selected.value.indexOf(index) !== -1

                function onClick() {
                    if (!players.isShotAvailable && dice !== -1) {
                        selectDice(index)
                    }
                }

                return (
                    <Dice
                        key={index}
                        index={index}
                        value={dice}
                        selected={selected}
                        roll={!selected && loading.value}
                        onClick={onClick}
                    />
                )
            })}
        </div>
    )
}
