import { getRandomInt } from "@helpers/random"
import { takenAvatars } from "@store/players/takenAvatars"
import { AvatarEnum, MAX_PLAYERS_COUNT } from "../../recoil/atoms"
import { computed } from "@preact/signals-react"

export const availableAvatar = computed(function () {
    let avatar

    do {
        avatar = getRandomInt(0, MAX_PLAYERS_COUNT - 1)
    } while (takenAvatars.value.includes(avatar) && takenAvatars.value.length !== MAX_PLAYERS_COUNT)

    return avatar as AvatarEnum
})
