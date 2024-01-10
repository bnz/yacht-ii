import { builder } from "@helpers/localStorage"
import { Combination } from "@components/Combinations/combinationsData"
import { activePlayerId } from "@store/players/activePlayerId"
import { computed } from "@preact/signals-react"
import { activePlayerShot } from "@store/players/activePlayerShot"
import { dices, DicesType } from "@store/dices"
import { dicesSelected } from "@store/dicesSelected"

export interface Move {
    tries: DicesType[]
    result: {
        [key in Combination]?: number
    }
    dicesSelected: DicesType[]
}

type History = Record<string, Move[]>

export const {
    signal: history,
    update: updateHistory,
} = builder<History>("history", {})

export const activePlayerHistory = computed(function () {
    return history.value[activePlayerId.value] || []
})

export function playerHistory(playerId: string): Move[] {
    return history.value[playerId]
}

export function updateActivePlayerHistoryResult({ combination, points }: { combination: Combination, points?: number }): void {
    const playerHistory = JSON.parse(JSON.stringify(activePlayerHistory.value)) as Move[]

    if (!playerHistory.length) {
        // @ts-ignore FIXME types
        playerHistory.push({ result: { [combination]: points } })
    }

    const lastElementIndex = playerHistory.length - 1
    playerHistory[lastElementIndex].result[combination] = points
    updateActivePlayerHistory(playerHistory)
}

export function updateActivePlayerHistory(value: Move[]) {
    const copy = JSON.parse(JSON.stringify(history.value)) as History
    copy[activePlayerId.value] = value
    updateHistory(copy)
}

export function historyUpdateDices() {
    const shot = activePlayerShot.value
    const copy = JSON.parse(JSON.stringify(activePlayerHistory.value)) as Move[]

    if (shot === 1) {
        copy.push({
            tries: [dices.value],
            result: {},
            dicesSelected: [],
        })
    } else {
        const lastElementIndex = copy.length - 1
        copy[lastElementIndex].tries.push(dices.value)
        copy[lastElementIndex].dicesSelected.push(dicesSelected.value)
    }

    updateActivePlayerHistory(copy)
}
