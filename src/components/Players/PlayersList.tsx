import { playersData } from "@signals/players/playersData"
import { PlayersListItem } from "./PlayersListItem"
import { AddPlayerForm } from "./AddPlayerForm"
import { ListWrap } from "./ListWrap"
import { addPlayerFormVisible } from "@signals/addPlayerFormVisible"

export function PlayersList() {
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
            {addPlayerFormVisible.value && (
                <AddPlayerForm />
            )}
        </ListWrap>
    )
}
