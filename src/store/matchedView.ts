import { builder } from "@helpers/localStorage"

export enum MatchedView {
    points,
    preview,
}

type MatchedViewType = Record<string, MatchedView>

export const {
    signal: matchedView,
    update: updateMatchedView,
} = builder<MatchedViewType>("matchedView", {})

export function getPlayerMatchedView(playerId: string) {
    return matchedView.value[playerId]
}

export function toggleMatchedView(playerId: string) {
    const copy = JSON.parse(JSON.stringify(matchedView.value)) as MatchedViewType

    copy[playerId] = copy[playerId] === MatchedView.points
        ? MatchedView.preview
        : MatchedView.points

    updateMatchedView({ ...copy })
}
