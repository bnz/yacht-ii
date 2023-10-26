import { selector } from 'recoil'
import { editingInProgress, playersData } from '../atoms'

export const startGameButtonDisabledSelector = selector<boolean>({
    key: "startGameButtonDisabledSelector",
    get({ get }) {
        const players = get(playersData)
        const inProgress = get(editingInProgress)

        return players.length <= 0 || inProgress
    },
})