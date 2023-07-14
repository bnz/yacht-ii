import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useCallback, useState } from "react"
import { Backdrop } from "../parts/Backdrop"
import closeIconUrl from "../../icons/close.svg"
import closeWhiteIconUrl from "../../icons/close-white.svg"
import { useTheme } from "../../helpers/useTheme"
import cx from "classnames"
import { AddPlayerForm } from "./AddPlayerForm"
import { useRecoilValue } from "recoil"
import { playersData } from "../../atoms"

export const AddPlayer: FC = () => {
    const [open, setOpen] = useState(false)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const isDark = useTheme() === "dark"

    const ids = useRecoilValue(playersData)

    // console.log({ ids })

    return (
        <>
            <button type="button" onClick={toggle}>
                {i18n('button.addPlayer')}
            </button>
            {open && (
                <>
                    <Backdrop onClick={toggle} />
                    <section className={cx(
                        "fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark-bg rounded",
                        // "w-5/6 md:w-1/2",
                        "p-5",
                        "drop-shadow-lg",
                    )}>
                        <header className="p-3 font-bold relative">
                            {i18n('button.addPlayer')}
                            <button
                                className="w-10 h-10 absolute top-0 right-0 bg-no-repeat bg-center"
                                style={{ backgroundImage: `url('${isDark ? closeWhiteIconUrl : closeIconUrl}')` }}
                                onClick={toggle}
                            />
                        </header>
                        <div className="px-3 pb-3">
                            <AddPlayerForm callback={toggle} />
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
