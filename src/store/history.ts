import { builder } from "@helpers/localStorage"
import { Combination } from "@components/Combinations/combinationsData"
import { computed } from "@preact/signals-react"
import { dices, DicesType } from "@store/dices"
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

export const history = (function () {
    const { signal: s, update } = builder<History>("history", {})

    return {
        get value() {
            return s.value
        },
        update(value: History) {
            update(value)
        },
        get activePlayer() {
            return computed(function () {
                return s.value[players.activeId] || []
            }).value
        },
        player(playerId: string) {
            return s.value[playerId]
        },
        updateActivePlayerResult({ combination, points }: { combination: Combination, points?: number }) {
            const copy = createCopy(this.activePlayer)

            if (!copy.length) {
                copy.push({
                    result: {},
                    dicesSelected: [],
                    tries: [],
                })
            }

            const lastElementIndex = copy.length - 1
            copy[lastElementIndex].result[combination] = points
            this.updateActivePlayer(copy)
        },
        updateActivePlayer(value: Move[]) {
            const copy = createCopy(s.value)
            copy[players.activeId] = value
            this.update({ ...copy })
        },
        updateDices() {
            const copy = createCopy(this.activePlayer)

            if (players.activeShot === 1) {
                copy.push({
                    tries: [dices.value],
                    result: {},
                    dicesSelected: [],
                })
            } else {
                const lastElementIndex = copy.length - 1
                copy[lastElementIndex].tries.push(dices.value)
                copy[lastElementIndex].dicesSelected.push(dices.selected.value)
            }

            this.updateActivePlayer(copy)
        },
    }
})()
