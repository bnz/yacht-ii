import { signal } from "@preact/signals-react"

export const addPlayerFormVisible = signal<boolean>(false)

export function updateAddPlayerFormVisible(value: boolean) {
    addPlayerFormVisible.value = value
}
