import { useRecoilValue } from "recoil"
import { addPlayerFormVisible, playersData } from "../../recoil/atoms"
import { PlayersListItem } from "./PlayersListItem"
import { AddPlayerForm } from "./AddPlayerForm"
import { ListWrap } from "./ListWrap"

export function PlayersList() {
    const addPlayerVisible = useRecoilValue(addPlayerFormVisible)
    const players = useRecoilValue(playersData)

    if (players.length <= 0) {
        return (
            <ListWrap>
                <AddPlayerForm initial />
            </ListWrap>
        )
    }

    return (
        <ListWrap>
            {players.map(function ({ id }) {
                return <PlayersListItem key={id} id={id} />
            })}
            {addPlayerVisible && (
                <AddPlayerForm />
            )}
        </ListWrap>
    )
}
