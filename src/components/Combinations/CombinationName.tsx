import type { FC } from "react"
import { useCallback, useMemo, useState } from "react"
import cx from "classnames"
import { Combination } from "./combinationsData"
import { commonBorder, commonSizes } from "./Combinations"
import { CombinationTitle } from "./CombinationTitle"
import { namesColumnViewSelector, NamesColumnViewEnum } from "../../recoil/selectors/namesColumnViewSelector"
import { useRecoilValue } from "recoil"
import { getDicesPreview } from "./getDicesPreview"

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
    const namesColumnView = useRecoilValue(namesColumnViewSelector)
    const dicesPreview = useMemo(() => getDicesPreview(combination), [combination])

    return (
        <div
            className={cx(className, commonSizes, commonBorder, "relative !justify-start cursor-pointer pl-2")}
            onClick={toggle}
        >
            {namesColumnView === NamesColumnViewEnum.text ? name : (
                <div className="text-sm flex">
                    {Array.isArray(dicesPreview) ? dicesPreview[0] : dicesPreview}
                </div>
            )}
            {open && (
                <CombinationTitle onClose={toggle}>
                    <h5 className="text-2xl mb-5">{name}</h5>
                    <p className={cx((title2 || dicesPreview) && "mb-5")}>{title1}</p>
                    {dicesPreview && (
                        <div className="flex text-2xl mb-3">
                            {Array.isArray(dicesPreview) ? dicesPreview[1] : dicesPreview}
                        </div>
                    )}
                    {title2 && (
                        <p className="font-bold text-xs">{title2}</p>
                    )}
                </CombinationTitle>
            )}
        </div>
    )
}
