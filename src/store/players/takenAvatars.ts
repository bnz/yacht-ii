import { computed } from "@preact/signals-react"
import { playersData } from "@store/players/playersData"
import { AvatarEnum } from "../../recoil/atoms"

export const takenAvatars = computed<AvatarEnum[]>(function () {
    return playersData.value.map(function ({ data: { avatar } }) {
        return avatar
    })
})
