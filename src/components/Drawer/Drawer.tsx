import type { FC } from "react"
import { useCallback } from "react"
import { Footer } from "../Footer"
import cx from "classnames"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { drawerState, gamePhase, GamePhases } from "../../atoms"
import { Backdrop } from "../parts/Backdrop"
import { MenuButton } from "./MenuButton"

export const Drawer: FC = () => {
    const [open, setOpen] = useRecoilState(drawerState)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const setGamePhase = useSetRecoilState(gamePhase)
    const phase = useRecoilValue(gamePhase)

    return (
        <>
            {open && (
                <Backdrop onClick={toggle} />
            )}
            <div className={cx(
                "w-80 pt-28 px-5",
                "fixed top-0 left-0 h-full shadow-xl",
                "transition-transform duration-100",
                !open && "shadow-none",
            )} style={{
                backgroundColor: "var(--background-color)",
                color: "var(--text-color)",
                transform: "translateX(0)",
                ...(!open ? {
                    transform: "translateX(calc(320px * -1))",
                    boxShadow: "none",
                } : {}),
            }}>
                <div className="h-full -mb-20">
                    <div>change game select</div>
                    {phase === GamePhases.IN_PLAY && (
                        <button type="button" onClick={() => {
                            setGamePhase(GamePhases.PRE_GAME)
                            toggle()
                        }}>
                            {i18n('button.restartGame')}
                        </button>
                    )}
                    <div>SettingsTabContent</div>
                    <div>HistoryTab</div>
                </div>
                <Footer />
            </div>
            <MenuButton />
        </>
    )
}
