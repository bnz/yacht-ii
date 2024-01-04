import { signal } from "@preact/signals-react"

export const editingInProgress = signal<boolean>(false)

export function updateEditingInProgress(value: boolean) {
    editingInProgress.value = value
}
