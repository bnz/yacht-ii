import type { Combination } from "@components/Combinations/combinationsData"
import { builder } from "@helpers/localStorage"

type DialogVisibility = Combination | null

export const {
    signal: combinationDescDialogVisibility,
    update: updateDialogVisibility,
} = builder<DialogVisibility>(null, null)
