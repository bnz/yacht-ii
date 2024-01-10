import { AvatarEnum } from "../../../recoil/atoms"
import { makeId } from "@helpers/makeId"
import { playersIds, updatePlayersIds } from "@store/players/playersIds"
import { updatePlayerById } from "@store/players/updaters/updatePlayerById"

export function addPlayer({ name, avatar }: { name: string, avatar: AvatarEnum }): void {
    const id = makeId()
    updatePlayersIds([...playersIds.value, id])
    updatePlayerById(id, { name, avatar })
}
