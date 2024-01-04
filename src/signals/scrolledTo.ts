import { signal } from "@preact/signals-react"

type ScrolledTo = null | "logo" | "button"

export const scrolledTo = signal<ScrolledTo>(null)

export function update(value: ScrolledTo) {
    scrolledTo.value = value
}
