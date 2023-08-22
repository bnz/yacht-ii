import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { Avatar } from "../Players/Avatar"
import { useRecoilValue } from "recoil"
import { playerMoveAtom, playersDataActiveFirst } from "../../recoil/atoms"
import cx from "classnames"
import { commonBorder } from "./Combinations"

export const CombinationsHeader: FC = () => {
    const [playerId] = useRecoilValue(playerMoveAtom)
    const players = useRecoilValue(playersDataActiveFirst)

    return (
        <>
            <div className={commonBorder} />
            {players.map(({ id, data: { name, avatar } }) => (
                <div key={id} className={cx(
                    commonBorder,
                    "flex flex-row justify-center items-center gap-3 relative",
                )}>
                    <Avatar disabled={playerId !== id} avatar={avatar} className="!w-20 !h-20" />
                    <div className="absolute bottom-0 left-1/2 translate-x-6">
                        {name}
                    </div>
                </div>
            ))}
            <div className={commonBorder} />
        </>
    )
}
