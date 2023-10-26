import { useCallback } from "react"
import { Footer } from "../Footer"
import cx from "classnames"
import { useRecoilState, useRecoilValue } from "recoil"
import { drawerState, gamePhase, GamePhases } from "../../recoil/atoms"
import { Backdrop } from "../Backdrop"
import { MenuButton } from "./MenuButton"
import { KeyboardActions } from "../../helpers/KeyboardActions"
import { combinationNameVisibilityAtom } from "../../recoil/atoms/combinationNameVisibilityAtom"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"
import { DrawerContent } from './DrawerContent'

export function Drawer() {
    const [open, setOpen] = useRecoilState(drawerState)
    const toggle = useCallback(function () {
        setOpen(function (prev) {
            return !prev
        })
    }, [setOpen])
    const phase = useRecoilValue(gamePhase)

    const combinationNameVisibility = useRecoilValue(combinationNameVisibilityAtom)
    const endOfGameVisibility = useRecoilValue(endOfGameVisibilityAtom)

    if (phase !== GamePhases.IN_PLAY && phase !== GamePhases.CHILD_PLAY) {
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
                "bg-[--background-color] text-[--text-color]",
                "translate-x-0",
                !open && "shadow-none -translate-x-80",
            )}>
                <div className="h-full -mb-20">
                    <DrawerContent />
                </div>
                <Footer />
            </div>
            <MenuButton />
        </>
    )
}
