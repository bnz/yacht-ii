import { KeyboardActions } from "@helpers/KeyboardActions"
import { toggle } from "@signals/drawer"
import { useRecoilValue } from "recoil"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"
import { combinationDescDialogVisibility } from "@signals/combinationDescDialogVisibility"

export function DrawerActions() {
    const endOfGameVisibility = useRecoilValue(endOfGameVisibilityAtom)

    return (
        <>
            {combinationDescDialogVisibility.value === null && endOfGameVisibility && (
                <KeyboardActions actions={{ Escape: toggle }} />
            )}
        </>
    )
}
