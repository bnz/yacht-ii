import { Footer } from "../Footer"
import cx from "classnames"
import { MenuButton } from "./MenuButton"
import { DrawerContent } from './DrawerContent'
import { drawer } from "@store/drawer"
import { useSignals } from "@preact/signals-react/runtime"
import { DrawerActions } from "@components/Drawer/DrawerActions"
import { DrawerBackdrop } from "@components/Drawer/DrawerBackdrop"

export default function Drawer() {
    useSignals()

    return (
        <>
            <DrawerActions />
            <DrawerBackdrop />
            <div className={cx(
                "z-10",
                "w-80 pt-28 px-5",
                "fixed top-0 left-0 h-full",
                "transition-transform duration-100",
                "bg-[--background-color] text-[--text-color]",
                drawer.value ? "shadow-xl translate-x-0" : "shadow-none -translate-x-80",
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
