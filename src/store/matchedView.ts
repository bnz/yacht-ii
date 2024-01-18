import { builder } from "@helpers/localStorage"
import { createCopy } from "@helpers/createCopy"

export enum MatchedView {
    points,
    preview,
}

type MatchedViewType = Record<string, MatchedView>

export const matchedView = (function () {
    const { signal, update } = builder<MatchedViewType>("matchedView", {})

    return {
        getByPlayerId(playerId: string) {
            return signal.value[playerId]
        },
        toggle(playerId: string) {
            const copy = createCopy(signal.value)

            copy[playerId] = copy[playerId] === MatchedView.points
                ? MatchedView.preview
                : MatchedView.points

            update(copy)
        },
        reset() {
            update({})
        }
    }
})()
