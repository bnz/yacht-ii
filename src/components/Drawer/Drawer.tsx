import type { FC } from "react"
import { useCallback } from "react"
import { Footer } from "../Footer"
import cx from "classnames"
import { i18n } from "../../helpers/i18n/i18n"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { drawerState, gamePhase, GamePhases, restartGame } from "../../recoil/atoms"
import { Backdrop } from "../Backdrop"
import { MenuButton } from "./MenuButton"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { combinationNameVisibilityAtom } from "../../recoil/atoms/combinationNameVisibilityAtom"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"

export const Drawer: FC = () => {
    const [open, setOpen] = useRecoilState(drawerState)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const phase = useRecoilValue(gamePhase)
    const restart = useSetRecoilState(restartGame)
    const combinationNameVisibility = useRecoilValue(combinationNameVisibilityAtom)
    const endOfGameVisibility = useRecoilValue(endOfGameVisibilityAtom)

    if (phase !== GamePhases.IN_PLAY) {
        return null
    }

    return (
        <>
            {combinationNameVisibility === null && endOfGameVisibility && (
                <KeyboardActions actions={{ Escape: toggle }} />
            )}
            {open && (
                <Backdrop onClick={toggle} />
            )}
            <div className={cx(
                "z-10",
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
                    <button type="button" onClick={() => {
                        restart(true)
                        toggle()
                    }}>
                        {i18n('button.restartGame')}
                    </button>
                    <div>SettingsTabContent</div>
                    <div>HistoryTab</div>
                </div>
                <Footer />
            </div>
            <MenuButton />
        </>
    )
}
