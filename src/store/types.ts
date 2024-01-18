import { AvatarEnum } from "../recoil/atoms"
import { Combination } from "@components/Combinations/combinationsData"

export type CommonBuilderType<Value, R> = {
    value: Value
} & R

export type Updater<T> = (value: T) => T

type Ids<T> = CommonBuilderType<T, {
    update: (value: T | Updater<T>) => void
    reset(): void
}>

export type PlayerMove = [playerId: string, shot: number]

type Move<T> = CommonBuilderType<T, {
    reset(): void
    update(value: T | Updater<T>): void
}>

export type Points = {
    [key in Combination]?: number
}

export type PlayersTotals = {
    [playerId: string]: number
}

type PlayerPoints<T> = CommonBuilderType<T, {
    active: Points
    update(value: T): void
    updateActive(points: Points): void
    get(playerId: string): Points
    reset(): void
    totals: PlayersTotals
}>

export interface PlayerData {
    name: string
    avatar: AvatarEnum
}

export type Players = Record<string, PlayerData>

export interface Player {
    id: string
    data: PlayerData
}

export type Result<T, I> = CommonBuilderType<T, {
    active: I
    activeId: string
    activeShot: number
    isShotAvailable: boolean
    data: Player[]
    dataActiveFirst: Player[]
    count: number
    takenAvatars: AvatarEnum[]
    availableAvatar: AvatarEnum
    add(data: I): void
    update(...args: [playerIdOrUpdater: string | Updater<T>, data?: I]): void
    remove(playerId: string): void
    reset(): void
    getById(playerId: string): I
    nextTurn(): void

    ids: Ids<string[]>
    move: Move<PlayerMove>
    points: PlayerPoints<Record<string, Points>>
    columnView: NamesColumnView<ColumnView>
}>

export const enum ColumnViewEnum {
    "text",
    "preview",
}

export type ColumnView = Record<string, ColumnViewEnum>

type NamesColumnView<T> = CommonBuilderType<T, {
    active: ColumnViewEnum
    reset(): void
    toggleActive(): void
}>
