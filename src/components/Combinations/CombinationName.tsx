import { useCallback, useMemo } from "react"
import cx from "classnames"
import { Combination } from "./combinationsData"
import { commonBorder, commonSizes } from "./Combinations"
import { CombinationTitle } from "./CombinationTitle"
import { namesColumnViewSelector } from "../../recoil/selectors/namesColumnViewSelector"
import { useRecoilState, useRecoilValue } from "recoil"
import { getDicesPreview } from "./getDicesPreview"
import { createPortal } from "react-dom"
import { combinationNameVisibilityAtom } from "../../recoil/atoms/combinationNameVisibilityAtom"
import { NamesColumnViewEnum } from "../../recoil/atoms/namesColumnViewAtomFamily"

interface CombinationNameProps {
    className?: string | undefined
    name: string
    title: string
    combination: Combination
}

export function CombinationName({ className, name, title, combination }: CombinationNameProps) {
    const [title1, title2] = title.split("###")
    const [open, setOpen] = useRecoilState(combinationNameVisibilityAtom)
    const toggle = useCallback(function () {
        setOpen(function (prev) {
            return prev === null ? combination : null
        })
    }, [setOpen, combination])
    const namesColumnView = useRecoilValue(namesColumnViewSelector)
    const isText = namesColumnView === NamesColumnViewEnum.text
    const dicesPreview = useMemo(function () {
        return getDicesPreview(combination)
    }, [combination])

    return (
        <>
            <div
                className={cx(className, commonSizes, commonBorder, "relative !justify-start cursor-pointer overflow-hidden")}
                onClick={toggle}
            >
                {combination === Combination.BONUS ? (
                    <div className={cx("absolute left-0 pl-2 top-1/2 -translate-y-1/2")}>
                        {name}
                    </div>
                ) : (
                    <>
                        <div className={cx(
                            "opacity-0 absolute left-0 pl-2 top-1/2 -translate-y-1/2",
                            isText ? "animate-fadeOut" : "animate-fadeIn",
                        )}>
                            {name}
                        </div>
                        <div className={cx(
                            "opacity-0 pl-2 text-sm flex absolute left-0 top-1/2 -translate-y-1/2",
                            isText ? "animate-fadeIn" : "animate-fadeOut",
                        )}>
                            {Array.isArray(dicesPreview) ? dicesPreview[0] : dicesPreview}
                        </div>
                    </>
                )}
            </div>
            {open === combination && createPortal(
                <CombinationTitle onClose={toggle}>
                    <h5 className="text-2xl mb-5">{name}</h5>
                    <p className={cx("font-thin", (title2 || dicesPreview) && "mb-5")}>{title1}</p>
                    {dicesPreview && (
                        <div className="flex text-2xl mb-3">
                            {Array.isArray(dicesPreview) ? dicesPreview[1] : dicesPreview}
                        </div>
                    )}
                    {title2 && (
                        <p className="font-bold text-xs">{title2}</p>
                    )}
                </CombinationTitle>,
                document.body,
            )}
        </>
    )
}
