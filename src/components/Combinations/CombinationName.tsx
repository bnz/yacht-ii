import type { FC } from "react"
import { useCallback, useMemo, useState } from "react"
import cx from "classnames"
import { Combination } from "./combinationsData"
import { Dice } from "../Dices/Dice/Dice"
import { commonBorder, commonSizes } from "./Combinations"
import { CombinationTitle } from "./CombinationTitle"
import { namesColumnViewAtom, NamesColumnViewEnum } from "../../recoil/atoms/namesColumnViewAtom"
import { useRecoilValue } from "recoil"

interface CombinationNameProps {
    className?: string | undefined
    name: string
    title: string
    combination: Combination
}

export const CombinationName: FC<CombinationNameProps> = ({ className, name, title, combination }) => {

    const [title1, title2] = title.split("###")

    const [open, setOpen] = useState(false)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const namesColumnView = useRecoilValue(namesColumnViewAtom)

    const dice = useMemo(() => {
        switch (combination) {
            case Combination.ONE:
            case Combination.TWO:
            case Combination.THREE:
            case Combination.FOUR:
            case Combination.FIVE:
            case Combination.SIX:
                return (
                    <>
                        <Dice value={combination} index={0} />
                        <Dice value={combination} index={0} />
                        <Dice value={combination} index={0} />
                        <div className={cx(
                            "flex relative",
                            "after:block",
                            "after:absolute after:inset-0 after:bg-[var(--background-color-disabled)]",
                        )}>
                            <Dice value={combination} index={0} />
                            <Dice value={combination} index={0} />
                        </div>
                    </>
                )
            case Combination.EQUAL_3:
                return (
                    <>
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                    </>
                )
            case Combination.EQUAL_4:
                return (
                    <>
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                    </>
                )
            case Combination.SMALL_STRAIGHT:
                return (
                    <>a</>
                )
            case Combination.BIG_STRAIGHT:
                return (
                    <>b</>
                )
            case Combination.TWO_PAIR:
                return (
                    <>c</>
                )
            case Combination.FULL_HOUSE:
                return (
                    <>d</>
                )
            case Combination.THE_YACHT:
                return (
                    <>
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={3} index={0} />
                    </>
                )
            case Combination.CHANCE:
                return (
                    <>
                        <Dice value={2} index={0} />
                        <Dice value={3} index={0} />
                        <Dice value={4} index={0} />
                        <Dice value={5} index={0} />
                        <Dice value={6} index={0} />
                    </>
                )
            default:
                return <></>
        }
    }, [combination])

    return (
        <div
            className={cx(className, commonSizes, commonBorder, "relative !justify-start cursor-pointer pl-2")}
            onClick={toggle}
        >
            {namesColumnView === NamesColumnViewEnum.text ? name : (
                <div className="text-sm absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex">
                    {dice}
                </div>
            )}
            {open && (
                <CombinationTitle onClose={toggle}>
                    <h5 className="text-2xl mb-5">{name}</h5>
                    <p className="mb-2">{title1}</p>
                    <p className="mb-5 font-bold text-xs">{title2}</p>
                    <div className="flex text-2xl">
                        {dice}
                    </div>
                </CombinationTitle>
            )}
        </div>
    )
}
