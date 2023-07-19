import type { FC } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { playersData, removePlayer } from "../../atoms"
import { i18n } from "../../helpers/i18n/i18n"

export const PlayersList: FC = () => {
    const players = useRecoilValue(playersData)
    const remove = useSetRecoilState(removePlayer)

    return (
        <ul className="mb-5">
            {players.map(({ id, name }) => (
                <li key={id} className="flex max-w-xs px-5 py-3 border-gray-500 border box-border">
                    <div className="flex-1">{name}</div>
                    <button onClick={() => remove({ id, name: "" })}>
                        {i18n("button.remove")}
                    </button>
                </li>
            ))}
        </ul>
    )
}
