import { computed } from "@preact/signals-react"
import { playersIds } from "./playersIds"

export const playersCount = computed<number>(function () {
    return playersIds.value.length
})
