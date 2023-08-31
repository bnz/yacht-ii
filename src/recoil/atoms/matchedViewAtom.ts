import { atomFamily } from "recoil"
import { persist } from "../persist"

export enum MatchedView {
    points,
    preview,
}

export const matchedViewAtom = atomFamily<MatchedView, string>({
    key: "matchedViewAtom",
    default: MatchedView.points,
    effects: [persist('matched-view')],
})
