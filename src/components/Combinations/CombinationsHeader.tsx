import { Avatar } from "../Players/Avatar"
import { useRecoilValue } from "recoil"
import { playersDataActiveFirst } from "../../recoil/selectors/playersDataActiveFirst"
import cx from "classnames"
import { commonBorder } from "./Combinations"
import { ToggleNamesColumnViewButton } from "./ToggleNamesColumnViewButton"
import { activePlayerId } from "@signals/players/activePlayerId"

export function CombinationsHeader() {
    const players = useRecoilValue(playersDataActiveFirst)

    return (
        <>
            <ToggleNamesColumnViewButton />
            {players.map(function ({ id, data: { name, avatar } }) {
                return (
                    <div key={id} className={cx(
                        commonBorder,
                        "flex flex-row justify-center items-center gap-3 relative",
                    )}>
                        <Avatar disabled={activePlayerId.value !== id} avatar={avatar} className="!w-20 !h-20" />
                        <div className="absolute bottom-0 left-1/2 translate-x-6">
                            {name}
                        </div>
                    </div>
                )
            })}
            <div className={commonBorder} />
        </>
    )
}
