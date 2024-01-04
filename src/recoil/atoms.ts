import { atom, atomFamily, DefaultValue, GetRecoilValue, selector } from "recoil"
import { Combination } from "@components/Combinations/combinationsData"
import { getRandomInt } from "@helpers/random"
import { persist } from "./persist"
import { playerMoveAtom } from "./atoms/players/playerMove"
import { historyAtomFamily } from "./atoms/historyAtomFamily"
import { namesColumnViewAtomFamily } from "./atoms/namesColumnViewAtomFamily"
import { GamePhases, update } from "@signals/gamePhase"
import { update as updateChildPlay } from "@signals/childPlay"
import { playersIds, update as updatePlayersIds } from "@signals/players/playersIds"
import { playersData } from "@signals/players/playersData"
import { update as updatePlayers } from "@signals/players/players"

export enum AvatarEnum {
    dog0,
    dog1,
    dog2,
    dog3,
}

export const MAX_PLAYERS_COUNT = 4

export const getAvailableAvatar = selector<AvatarEnum>({
    key: "getAvailableAvatar",
    get() {
        // FIXME takenAvatars
        const taken = playersData.value.map(function ({ data: { avatar } }) {
            return avatar
        })
        let avatar

        do {
            avatar = getRandomInt(0, MAX_PLAYERS_COUNT - 1)
        } while (taken.includes(avatar) && taken.length !== MAX_PLAYERS_COUNT)

        return avatar as AvatarEnum
    },
})

const dogNamesFemale = [
    "Ася", "Боня", "Вита", "Голди", "Джес", "Ева", "Жужа", "Зара", "Ирма", "Кира", "Кики", "Лора", "Марта", "Нора", "Рада", "Соня", "Тося", "Феня", "Хася", "Чара",
]

const dogNamesMale = [
    "Макс", "Чарли", "Альф", "Лео", "Ник", "Оскар", "Рекс", "Сёма", "Том", "Чак", "Шрек", "Ярик", "Арчи", "Буч", "Веня", "Грей", "Джек", "Жорик", "Зак", "Каспер",
]

const dogNames = [
    ...dogNamesFemale,
    ...dogNamesMale,
]

function getDogName() {
    const taken = playersData.value.map(function ({ data: { name } }) {
        return name
    })
    let index

    do {
        index = getRandomInt(0, dogNames.length - 1)
    } while (taken.includes(dogNames[index]))

    return dogNames[index]
}

export const getRandomDogNameBySex = selector({
    key: "getRandomDogNameBySex",
    get() {
        return function () {
            return getDogName()
        }
    },
})

export const getRandomDogName = selector({
    key: "getRandomDogName",
    get() {
        return getDogName()
    },
})

export const editingInProgress = atom<boolean>({
    key: "editingInProgress",
    default: false,
})

export type PlayersTotals = {
    [playerId: string]: number
}

export const playerTotalsAtom = selector({
    key: "playerTotalsAtom",
    get({ get }) {
        const totals: PlayersTotals = {}

        playersData.value.forEach(function ({ id: playerId }) {
            const points = get(playerPointsAtomFamily(playerId))
            totals[playerId] = Object.keys(points).reduce(function (prev, key) {
                const curr = points[key as Combination]!
                if (key === Combination.BONUS && Math.sign(curr) === -1) {
                    return prev
                }
                return prev + curr
            }, 0)
        })
        return totals
    },
})

export const resetPlayers = selector<null>({
    key: "resetPlayers",
    get() {
        throw new Error("resetPlayers: use only as setter")
    },
    set({ reset }) {
        updatePlayers({})
        updatePlayersIds([])
        reset(playerMoveAtom)
    },
})

export const addPlayerFormVisible = atom<boolean>({
    key: "addPlayerFormVisible",
    default: false,
})

export const loadingAtom = atom<boolean>({
    key: "loadingAtom",
    default: false,
})

export type DicesType = number[]

export const dicesAtom = atom<DicesType>({
    key: "dices",
    default: [-1, -1, -1, -1, -1],
    effects: [persist("dices")],
})

export const MAX_SHOT_COUNT = 3

export const isShotAvailable = selector({
    key: "isShotAvailable",
    get({ get }) {
        return get(playerMoveAtom)[1] >= MAX_SHOT_COUNT
    },
})

export const dicesSelectedAtom = atom<number[]>({
    key: "dices-selected",
    default: [],
    effects: [persist('dices-selected')],
})

export const selectDice = selector<number>({
    key: "selectDice",
    get() {
        throw new Error("selectDice: use only as setter")
    },
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            const all = [...get(dicesSelectedAtom)]
            const diceIndex = props
            const index = all.indexOf(diceIndex)

            if (index !== -1) {
                all.splice(index, 1)
            } else if (all.length !== 4) {
                all.push(diceIndex)
            }
            set(dicesSelectedAtom, all)
        }
    },
})

export const restartGame = selector<boolean>({
    key: "restartGame",
    get() {
        throw new Error("restartGame: use only as setter")
    },
    set({ reset, set }) {
        reset(playerMoveAtom)
        reset(dicesAtom)
        reset(dicesSelectedAtom)
        update(GamePhases.PRE_GAME)
        updateChildPlay(false)
        set(resetPlayers, null)
        playersIds.value.forEach(function (id) {
            reset(playerPointsAtomFamily(id))
            reset(historyAtomFamily(id))
            reset(namesColumnViewAtomFamily(id))
        })
        updatePlayers({})
        updatePlayersIds([])

        // TODO
        // changeActiveTab(ActiveTab.SETTINGS)
    },
})

export type Points = {
    [key in Combination]?: number
}

export const playerPointsAtomFamily = atomFamily<Points, string>({
    key: "player-points",
    default: {},
    effects: [persist("player-points")],
})
