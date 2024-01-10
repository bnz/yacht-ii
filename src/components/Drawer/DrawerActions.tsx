import { KeyboardActions } from "@helpers/KeyboardActions"
import { toggle } from "@store/drawer"
import { combinationDescDialogVisibility } from "@store/combinationDescDialogVisibility"
import { endOfGameVisibility } from "@store/endOfGameVisibility"

export function DrawerActions() {
    return (
        <>
            {combinationDescDialogVisibility.value === null && endOfGameVisibility.value && (
                <KeyboardActions actions={{ Escape: toggle }} />
            )}
        </>
    )
}
