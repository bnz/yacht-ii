import { signal } from "@preact/signals-react"

export const loading = signal<boolean>(false)

export function updateLoading(value: boolean) {
    loading.value = value
}
