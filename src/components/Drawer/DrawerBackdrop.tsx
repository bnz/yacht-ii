import { drawer, toggle } from "@signals/drawer"
import { Backdrop } from "@components/Backdrop"

export function DrawerBackdrop() {
    return (
        <>
            {drawer.value && (
                <Backdrop onClick={toggle} />
            )}
        </>
    )
}
