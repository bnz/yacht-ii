import { Footer } from "../Footer"
import cx from "classnames"
import { useRecoilValue } from "recoil"
import { isInPlay } from "@signals/gamePhase"
import { Backdrop } from "../Backdrop"
import { MenuButton } from "./MenuButton"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { combinationNameVisibilityAtom } from "../../recoil/atoms/combinationNameVisibilityAtom"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"
import { DrawerContent } from './DrawerContent'
import { drawer, toggle } from "@signals/drawer"

export function Drawer() {
    const open = drawer.value

    const combinationNameVisibility = useRecoilValue(combinationNameVisibilityAtom)
    const endOfGameVisibility = useRecoilValue(endOfGameVisibilityAtom)

    if (!isInPlay.value) {
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
                "fixed top-0 left-0 h-full",
                "transition-transform duration-100",
                "bg-[--background-color] text-[--text-color]",
                open ? "shadow-xl translate-x-0" : "shadow-none -translate-x-80",
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
