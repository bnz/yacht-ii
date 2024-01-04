import { useRecoilValue } from "recoil"
import { addPlayerFormVisible } from "../../recoil/atoms"
import { playersData } from "@signals/players/playersData"
import { PlayersListItem } from "./PlayersListItem"
import { AddPlayerForm } from "./AddPlayerForm"
import { ListWrap } from "./ListWrap"

export function PlayersList() {
    const addPlayerVisible = useRecoilValue(addPlayerFormVisible)

    if (playersData.value.length <= 0) {
        return (
            <ListWrap>
                <AddPlayerForm initial />
            </ListWrap>
        )
    }

    return (
        <ListWrap>
            {playersData.value.map(function ({ id }) {
                return <PlayersListItem key={id} id={id} />
            })}
            {addPlayerVisible && (
                <AddPlayerForm />
            )}
        </ListWrap>
    )
}
