import type { FC } from "react"
import { Dice } from "./Dice/Dice"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { dicesSelectedAtom, loadingAtom, selectDice, dicesAtom, isShotAvailable } from "../../recoil/atoms"
import cx from "classnames"

export const Dices: FC = () => {
    const loading = useRecoilValue(loadingAtom)
    const dicesSelected = useRecoilValue(dicesSelectedAtom)
    const doSelectDice = useSetRecoilState(selectDice)
    const dices = useRecoilValue(dicesAtom)
    const isShot = useRecoilValue(isShotAvailable)

    return (
        <div className={cx(
            "flex flex-nowrap justify-center overflow-hidden gap-[0.333em] text-3xl lg:text-4xl",
            isShot ? "pt-3 pb-2" : "pt-8 pb-3"
            )}>
            {dices.map((dice, index) => {
                const selected = dicesSelected.indexOf(index) !== -1
                const onClick = () => {
                    if (!isShot && dice !== -1) {
                        doSelectDice(index)
                    }
                }

                return (
                    <Dice
                        key={index}
                        index={index}
                        value={dice}
                        selected={selected}
                        roll={!selected && loading}
                        onClick={onClick}
                    />
                )
            })}
        </div>
    )
}
