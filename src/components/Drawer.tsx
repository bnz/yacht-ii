import type { FC } from "react"
import { useCallback, useState } from "react"
import { Footer } from "./Footer"
import cx from "classnames"
import { i18n } from "../helpers/i18n/i18n"
import { useSetRecoilState } from "recoil"
import { gamePhase, GamePhases } from "../atoms"

export const Drawer: FC = () => {
    const [open, setOpen] = useState(false)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const setGamePhase = useSetRecoilState(gamePhase)

    return (
        <>
            <div onClick={toggle} className={cx(
                "fixed top-0 left-0 right-0 bottom-0 bg-black/30",
                !open && "hidden"
            )} />
            <div className={cx(
                "w-80 pt-28",
                "fixed top-0 left-0 h-full shadow-xl bg-white",
                "transition-transform duration-100",
                !open && "shadow-none",
            )} style={{
                transform: "translateX(0)",
                ...(!open ? {
                    transform: "translateX(calc(320px * -1))",
                    boxShadow: "none",
                } : {}),
            }}>
                <div>change game select</div>
                <button type="button" onClick={() => {
                    setGamePhase(GamePhases.PRE_GAME)
                    toggle()
                }}>
                    {i18n('button.restartGame')}
                </button>
                <div>SettingsTabContent</div>
                <div>HistoryTab</div>
                <Footer />
            </div>
            <button
                onClick={toggle}
                className={cx("w-20 h-20 bg-red-500 fixed md:top-5 md:left-5 bottom-5 right-5 rounded")}
            />
        </>
    )
}
