import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { useCallback } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { addPlayerFormVisible, MAX_PLAYERS_COUNT, playersCount, playersData } from "../../atoms"

export const AddPlayer: FC = () => {
    const count = useRecoilValue(playersCount)
    const [open, setOpen] = useRecoilState(addPlayerFormVisible)
    const players = useRecoilValue(playersData)
    const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])
    const disabled = players.length === 0 || open || count >= MAX_PLAYERS_COUNT

    return (
        <button type="button" onClick={toggle} disabled={disabled}>
            {i18n('button.addPlayer')}
        </button>
    )
}
