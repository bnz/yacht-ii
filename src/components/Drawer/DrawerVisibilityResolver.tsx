import { lazy, Suspense } from "react"
import { isInPlay } from "@store/gamePhase"

const LazyDrawer = lazy(function () {
    return import("./Drawer")
})

export function DrawerVisibilityResolver() {
    return isInPlay.value ? (
        <Suspense>
            <LazyDrawer />
        </Suspense>
    ) : null
}
