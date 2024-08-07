import { Combination } from "@components/Combinations/combinationsData"

export type CommonBuilderType<Value, R> = {
    value: Value
} & R

export type Updater<T> = (value: T) => T

export type Ids<T = string[]> = CommonBuilderType<T, {
    update: (value: T | Updater<T>) => void
    reset(): void
}>

export type PlayerMove = [playerId: string, shot: number]

export type PlayersMoveStore<T = PlayerMove> = CommonBuilderType<T, {
    reset(): void
    update(value: T | Updater<T>): void
}>

export type Points = {
    [key in Combination]?: number
}

export type PlayersTotals = {
    [playerId: string]: number
}

export type PlayerPoints<T = Record<string, Points>> = CommonBuilderType<T, {
    active: Points
    update(value: T): void
    updateActive(points: Points): void
    get(playerId: string): Points
    reset(): void
    totals: PlayersTotals
}>

export interface PlayerData {
    name: string
    avatar: string
}

export type Players = Record<string, PlayerData>

export interface Player {
    id: string
    data: PlayerData
}

export type PlayersStore<T = Players, I = PlayerData> = CommonBuilderType<T, {
    active: I
    activeId: string
    activeShot: number
    isShotAvailable: boolean
    data: Player[]
    dataActiveFirst: Player[]
    count: number
    takenAvatars: string[]
    availableAvatar: string
    add(data: I): void
    update(...args: [playerIdOrUpdater: string | Updater<T>, data?: I]): void
    remove(playerId: string): void
    reset(): void
    getById(playerId: string): I
    nextTurn(): void

    ids: Ids
    move: PlayersMoveStore
    points: PlayerPoints
    columnView: NamesColumnView
}>

export const enum ColumnViewEnum {
    "text",
    "preview",
}

export type ColumnView = Record<string, ColumnViewEnum>

export type NamesColumnView = CommonBuilderType<ColumnView, {
    active: ColumnViewEnum
    reset(): void
    toggleActive(): void
    isText: boolean
}>
