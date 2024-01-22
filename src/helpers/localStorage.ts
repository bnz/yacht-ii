import { effect, Signal, signal } from "@preact/signals-react"
import { CommonBuilderType } from "@store/types"

type Keys =
    | "gamePhase"
    | "childPlay"
    | "combinationNameVariant"
    | "playerMove"
    | "players"
    | "playersIds"
    | "columnView"
    | "drawer"
    | "matchedView"
    | "playerPoints"
    | "dices"
    | "dicesSelected"
    | "history"

const VERSION = ""

export const storageKeys: Record<Keys, string> = {
    gamePhase: `game-phase${VERSION}`,
    childPlay: `child-play${VERSION}`,
    combinationNameVariant: `combination-name-variant${VERSION}`,
    playerMove: `player-move${VERSION}`,
    players: `players${VERSION}`,
    playersIds: `players-ids${VERSION}`,
    columnView: `names-column-view${VERSION}`,
    drawer: `drawer-state${VERSION}`,
    matchedView: `matched-view${VERSION}`,
    playerPoints: `player-points${VERSION}`,
    dices: `dices${VERSION}`,
    dicesSelected: `dices-selected${VERSION}`,
    history: `history${VERSION}`,
}

export function restoreState<T>(key: Keys, defaultValue: T): T {
    try {
        const data = localStorage.getItem(storageKeys[key])

        if (data !== null) {
            return JSON.parse(data) as T
        }
    } catch (e) {
        console.log(e)
        return defaultValue
    }
    return defaultValue
}

export function saveState<T>(key: Keys, value: T): void {
    try {
        localStorage.setItem(storageKeys[key], JSON.stringify(value))
    } catch (e) {
        console.error(e)
    }
}

export type Updater<T> = (value: T) => T

type ReturnType<T> = {
    signal: Signal<T>
    update: (value: T | Updater<T>) => void
    toggle?: () => void
}

export function builder<T>(key: keyof typeof storageKeys | null, defaultValue: T, autoSave: boolean = true): ReturnType<T> {
    const s = signal(key ? restoreState(key, defaultValue) : defaultValue)

    if (key && autoSave) {
        effect(function () {
            saveState(key, s.value)
        })
    }

    const result: ReturnType<T> = {
        signal: s,
        update(value: T | Updater<T>) {
            // @ts-ignore FIXME types
            s.value = typeof value === "function" ? value(s.value) : value
        },
    }

    if (typeof defaultValue === "boolean") {
        result.toggle = function () {
            // @ts-ignore FIXME types
            result.update(function (value) {
                return !value
            })
        }
    }

    return result
}

type Fn<T, R> = (methods: (signal: Signal<T>, update: (value: T | Updater<T>) => void) => R) => CommonBuilderType<T, R>

export function builder2<T, R>(localStorageKey: keyof typeof storageKeys | null, defaultValue: T): Fn<T, R> {
    const { signal, update } = builder<T>(localStorageKey, defaultValue)

    return function (methods) {
        return {
            get value() {
                return signal.value
            },
            ...methods(signal, update),
        }
    }
}
