import cx from "classnames"
import { i18n } from "@helpers/i18n"
import { Dice } from "../Dices/Dice/Dice"
import { commonBorder } from "./Combinations"
import { activePlayerNamesColumnView } from "@signals/activePlayerNamesColumnView"
import { NamesColumnViewEnum, toggleActivePlayerNamesColumnView } from "@signals/namesColumnView"

export function ToggleNamesColumnViewButton() {
    return (
        <div className={cx("flex items-center justify-center text-3xl", commonBorder)}>
            <button type="button" data-empty={true} onClick={toggleActivePlayerNamesColumnView} className={cx(
                "border border-[--line-color] rounded-full w-full h-[1em] relative",
                "shadow-inner",
                "hover:shadow",
                "active:shadow-inner",
                "before:block before:bg-[--line-color] before:w-[calc(50%-.05em)] before:rounded-full",
                "before:absolute before:left-[0.05em] before:top-[.05em] before:bottom-[.05em]",
                "before:transition-all before:duration-300",
                activePlayerNamesColumnView.value === NamesColumnViewEnum.preview && cx(
                    "before:translate-x-full",
                    "[&>span:first-child]:text-[--text-color-semi]",
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
                    activePlayerNamesColumnView.value === NamesColumnViewEnum.text && cx(
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[--background-color-disabled]",
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
