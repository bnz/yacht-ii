import { builder } from "@helpers/localStorage"
import { Combination } from "@components/Combinations/combinationsData"
import { computed } from "@preact/signals-react"
import { dices, DicesType } from "@store/dices"
import { dicesSelected } from "@store/dicesSelected"
import { createCopy } from "@helpers/createCopy"
import { players } from "@store/players/players"

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
    return history.value[players.activeId] || []
})

export function playerHistory(playerId: string): Move[] {
    return history.value[playerId]
}

export function updateActivePlayerHistoryResult({ combination, points }: {
    combination: Combination,
    points?: number
}): void {
    const copy = createCopy(activePlayerHistory.value)

    // @ts-ignore FIXME types
    //

    if (!copy.length) {
        copy.push({
            result: { [combination]: points },
            dicesSelected: [],
            tries: [],
        })
    }

    const lastElementIndex = copy.length - 1
    copy[lastElementIndex].result[combination] = points
    updateActivePlayerHistory(copy)
}

export function updateActivePlayerHistory(value: Move[]) {
    const copy = createCopy(history.value)
    copy[players.activeId] = value
    updateHistory({ ...copy })
}

export function historyUpdateDices() {
    const copy = createCopy(activePlayerHistory.value)

    if (players.activeShot === 1) {
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
