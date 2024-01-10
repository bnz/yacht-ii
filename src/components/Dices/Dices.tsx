import { Dice } from "./Dice/Dice"
import cx from "classnames"
import { isShotAvailable } from "@store/players/isShotAvailable"
import { loading } from "@store/loading"
import { dicesSelected } from "@store/dicesSelected"
import { dices } from "@store/dices"
import { selectDice } from "@store/selectDice"

export function Dices() {
    return (
        <div className={cx(
            "flex flex-nowrap justify-center overflow-hidden gap-[0.333em] text-3xl lg:text-4xl",
            isShotAvailable.value ? "pt-3 pb-2" : "pt-8 pb-3",
        )}>
            {dices.value.map(function (dice, index) {
                const selected = dicesSelected.value.indexOf(index) !== -1

                function onClick() {
                    if (!isShotAvailable.value && dice !== -1) {
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
