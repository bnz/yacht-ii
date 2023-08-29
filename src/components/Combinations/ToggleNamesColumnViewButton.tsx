import type { FC } from "react"
import { useRecoilState } from "recoil"
import { namesColumnViewSelector, NamesColumnViewEnum } from "../../recoil/selectors/namesColumnViewSelector"
import { useCallback } from "react"
import cx from "classnames"
import { i18n } from "../../helpers/i18n/i18n"
import { Dice } from "../Dices/Dice/Dice"
import { commonBorder } from "./Combinations"

export const ToggleNamesColumnViewButton: FC = () => {
    const [view, setView] = useRecoilState(namesColumnViewSelector)
    const toggle = useCallback(() => setView((currVal) => (
        currVal === NamesColumnViewEnum.text ? NamesColumnViewEnum.preview : NamesColumnViewEnum.text
    )), [setView])

    return (
        <div className={cx("flex items-center justify-center text-3xl", commonBorder)}>
            <button type="button" data-empty={true} onClick={toggle} className={cx(
                "border border-[var(--line-color)] rounded-full w-full h-[1em] relative",
                "shadow-inner",
                "hover:shadow",
                "active:shadow-inner",
                "before:block before:bg-[var(--line-color)] before:w-[calc(50%-.05em)] before:rounded-full",
                "before:absolute before:left-[0.05em] before:top-[.05em] before:bottom-[.05em]",
                "before:transition-all before:duration-300",
                view === NamesColumnViewEnum.preview && cx(
                    "before:translate-x-full",
                    "[&>span:first-child]:text-[var(--text-color-semi)]",
                ),
                "[&>span]:flex [&>span]:items-center [&>span]:justify-center",
                "[&>span]:absolute [&>span]:top-0 [&>span]:bottom-0 [&>span]:w-1/2",
                "[&>span]:-z-10",
            )}>
                <span className="left-0 text-[.4em]">
                    {i18n("text")}
                </span>
                <span className={cx(
                    "right-0 text-[.3em] pt-[.2em] flex gap-[.25em] relative",
                    view === NamesColumnViewEnum.text && cx(
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[var(--background-color-disabled)]",
                    ),
                )}>
                    <Dice value={1} index={0} />
                    <Dice value={3} index={0} />
                    <Dice value={5} index={0} />
                </span>
            </button>
        </div>
    )
}
