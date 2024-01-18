import { builder } from "@helpers/localStorage"
import { CommonBuilderType } from "@store/types"

export type DicesType = number[]

type Selected<T> = CommonBuilderType<T, {
    update(value: T): void
    reset(): void
}>

type Result<T> = CommonBuilderType<T, {
    reset(): void
    update(value: T): void
    selected: Selected<number[]>
}>

export const dices = (function (): Result<number[]> {
    const defaultValue = [-1, -1, -1, -1, -1]
    const { signal, update } = builder<number[]>("dices", defaultValue)

    const {
        signal: selected,
        update: updateSelected,
    } = builder<number[]>("dicesSelected", [])

    return {
        get value() {
            return signal.value
        },
        update(value) {
            update(value)
        },
        reset() {
            update(defaultValue)
        },

        selected: {
            get value() {
                return selected.value
            },
            update(value) {
                updateSelected(value)
            },
            reset() {
                updateSelected([])
            },
        },
    }
})()
