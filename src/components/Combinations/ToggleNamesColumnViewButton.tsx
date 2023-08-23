import type { FC } from "react"
import { useRecoilState } from "recoil"
import { namesColumnViewAtom, NamesColumnViewEnum } from "../../recoil/atoms/namesColumnViewAtom"
import { useCallback } from "react"
import { commonBorder } from "./Combinations"

export const ToggleNamesColumnViewButton: FC = () => {
    const [view, setView] = useRecoilState(namesColumnViewAtom)
    const toggle = useCallback(() => setView((currVal) => (
        currVal === NamesColumnViewEnum.text ? NamesColumnViewEnum.preview : NamesColumnViewEnum.text
    )), [setView])

    return (
        <button type="button" onClick={toggle} className={commonBorder}>
            {view === NamesColumnViewEnum.text ? "preview" : "text"}
        </button>
    )
}
