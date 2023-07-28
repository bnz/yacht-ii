import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useCallback } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { addPlayerFormVisible, playersCount } from "../../atoms"

export const AddPlayer: FC = () => {
    const count = useRecoilValue(playersCount)
    const [open, setOpen] = useRecoilState(addPlayerFormVisible)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])

    return (
        <button type="button" onClick={toggle} disabled={open || count >= 5}>
            {i18n('button.addPlayer')}
        </button>
    )
}
