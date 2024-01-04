import { KeyboardActions } from "@helpers/KeyboardActions"
import { toggle } from "@signals/drawer"
import { useRecoilValue } from "recoil"
import { combinationNameVisibilityAtom } from "../../recoil/atoms/combinationNameVisibilityAtom"
import { endOfGameVisibilityAtom } from "../../recoil/atoms/endOfGameVisibilityAtom"

export function DrawerActions() {
    const combinationNameVisibility = useRecoilValue(combinationNameVisibilityAtom)
    const endOfGameVisibility = useRecoilValue(endOfGameVisibilityAtom)

    return (
        <>
            {combinationNameVisibility === null && endOfGameVisibility && (
                <KeyboardActions actions={{ Escape: toggle }} />
            )}
        </>
    )
}
