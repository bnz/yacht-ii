import type { FC } from "react"
import { useRecoilValue } from "recoil"
import { addPlayerFormVisible, playersData } from "../../atoms"
import { PlayersListItem } from "./PlayersListItem"
import React from "react"
import { AddPlayerForm } from "./AddPlayerForm"
import { ListWrap } from "./ListWrap"

export const PlayersList: FC = () => {
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
            {players.map(({ id, data: { name } }) => (
                <PlayersListItem key={id} id={id} name={name} />
            ))}
            {addPlayerVisible && (
                <AddPlayerForm />
            )}
        </ListWrap>
    )
}
