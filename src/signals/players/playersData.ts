import { computed } from "@preact/signals-react"
import { playersIds } from "@signals/players/playersIds"
import { players } from "@signals/players/players"
import { AvatarEnum } from "../../recoil/atoms"

export interface PlayerData {
    name: string
    avatar: AvatarEnum
}

export interface Player {
    id: string
    data: PlayerData
}

export const playersData = computed<Player[]>(function () {
    return playersIds.value.map(function (id) {
        return {
            id,
            data: players.value[id],
        }
    })
})
