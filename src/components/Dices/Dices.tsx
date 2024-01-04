import { Dice } from "./Dice/Dice"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { dicesSelectedAtom, selectDice, dicesAtom } from "../../recoil/atoms"
import cx from "classnames"
import { isShotAvailable } from "@signals/players/isShotAvailable"
import { loading } from "@signals/loading"

export function Dices() {
    const dicesSelected = useRecoilValue(dicesSelectedAtom)
    const doSelectDice = useSetRecoilState(selectDice)
    const dices = useRecoilValue(dicesAtom)

    return (
        <div className={cx(
            "flex flex-nowrap justify-center overflow-hidden gap-[0.333em] text-3xl lg:text-4xl",
            isShotAvailable.value ? "pt-3 pb-2" : "pt-8 pb-3",
        )}>
            {dices.map(function (dice, index) {
                const selected = dicesSelected.indexOf(index) !== -1

                function onClick() {
                    if (!isShotAvailable.value && dice !== -1) {
                        doSelectDice(index)
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
