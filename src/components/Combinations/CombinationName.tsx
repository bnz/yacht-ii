import type { FC } from "react"
import { useCallback, useMemo, useState } from "react"
import cx from "classnames"
import { Combination } from "./combinationsData"
import { Dice } from "../Dices/Dice/Dice"
import { commonBorder, commonSizes } from "./Combinations"
import { CombinationTitle } from "./CombinationTitle"

interface CombinationNameProps {
    className?: string | undefined
    name: string
    title: string
    combination: Combination
}

export const CombinationName: FC<CombinationNameProps> = ({ className, name, title, combination }) => {
    const [open, setOpen] = useState(false)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])

    const dice = useMemo(() => {
        switch (combination) {
            case Combination.ONE:
            case Combination.TWO:
            case Combination.THREE:
            case Combination.FOUR:
            case Combination.FIVE:
            case Combination.SIX:
                return <Dice value={combination} index={0} />
            case Combination.EQUAL_3:
                return (
                    <div className="flex text-[10px]">
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                    </div>
                )
            case Combination.EQUAL_4:
                return (
                    <div className="flex text-[10px]">
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                    </div>
                )
            case Combination.SMALL_STRAIGHT:
                return (
                    <div>a</div>
                )
            case Combination.BIG_STRAIGHT:
                return (
                    <div>b</div>
                )
            case Combination.TWO_PAIR:
                return (
                    <div>c</div>
                )
            case Combination.FULL_HOUSE:
                return (
                    <div>d</div>
                )
            case Combination.THE_YACHT:
                return (
                    <div className="flex text-[10px]">
                        <Dice value={6} index={0} />
                        <Dice value={6} index={0} />
                        <Dice value={6} index={0} />
                        <Dice value={6} index={0} />
                        <Dice value={6} index={0} />
                    </div>
                )
            case Combination.CHANCE:
                return (
                    <div>e</div>
                )
            default:
                return <></>
        }
    }, [combination])

    return (
        <div
            className={cx(className, commonSizes, commonBorder, "relative border-r !justify-start cursor-pointer pl-2")}
            onClick={toggle}
        >
            {name}
            {open && (
                <CombinationTitle onClose={toggle}>
                    {title}
                    {dice}
                </CombinationTitle>
            )}
            <div className="text-sm absolute right-2 top-1/2 -translate-y-1/2">
                {dice}
            </div>
        </div>
    )
}
