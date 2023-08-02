import type { FC } from "react"
import { Dice } from "./Dice/Dice"
import { DicesWrapper } from "./DicesWrapper"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { dicesSelectedAtom, loadingAtom, selectDice, dicesAtom, isMoveAvailable } from "../../atoms"

export const Dices: FC = () => {
    const loading = useRecoilValue(loadingAtom)
    const dicesSelected = useRecoilValue(dicesSelectedAtom)
    const doSelectDice = useSetRecoilState(selectDice)
    const dices = useRecoilValue(dicesAtom)
    const isMove = useRecoilValue(isMoveAvailable)

    return (
        <DicesWrapper>
            {dices.map((dice, index) => {
                const selected = dicesSelected.indexOf(index) !== -1

                return (
                    <Dice
                        key={index}
                        index={index}
                        value={dice}
                        selected={selected}
                        roll={!selected && loading}
                        onClick={() => {
                            if (!isMove && dice !== -1) {
                                doSelectDice(index)
                            }
                        }}
                    />
                )
            })}
        </DicesWrapper>
    )
}
