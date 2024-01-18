import { players } from "@store/players/players"
import { PlayersListItem } from "./PlayersListItem"
import { AddPlayerForm } from "./AddPlayerForm"
import { ListWrap } from "./ListWrap"
import { addPlayerFormVisible } from "@store/addPlayerFormVisible"

export function PlayersList() {
    if (players.data.length <= 0) {
        return (
            <ListWrap>
                <AddPlayerForm initial />
            </ListWrap>
        )
    }

    return (
        <ListWrap>
            {players.data.map(function ({ id }) {
                return <PlayersListItem key={id} id={id} />
            })}
            {addPlayerFormVisible.value && (
                <AddPlayerForm />
            )}
        </ListWrap>
    )
}
