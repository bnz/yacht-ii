import { signal } from "@preact/signals-react"
import { Combination } from "@components/Combinations/combinationsData"

type DialogVisibility = Combination | null

export const combinationDescDialogVisibility = signal<DialogVisibility>(null);

export function updateDialogVisibility(value: (value: DialogVisibility) => DialogVisibility) {
    combinationDescDialogVisibility.value = value(combinationDescDialogVisibility.value)
}
