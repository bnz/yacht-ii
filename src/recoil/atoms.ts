import { atom, atomFamily, DefaultValue, GetRecoilValue, selector } from "recoil"
import { recoilPersist } from 'recoil-persist'
import { Combination, combinationsData } from "../components/Combinations/combinationsData"
import { checkMatch } from "../helpers/checkMatch"
import { makeId } from "../helpers/makeId"
import { getRandomInt } from "../helpers/random"
import { nextTurnAtom } from "./atoms/nextTurnAtom"

export enum GamePhases {
    PRE_GAME = 'preGame',
    PLAYERS_SELECTION = 'playersSelection',
    IN_PLAY = 'inPlay',
}

const persist = (key: string) => recoilPersist({ key }).persistAtom

export const gamePhase = atom<GamePhases>({
    key: "gamePhase",
    default: GamePhases.PRE_GAME,
    effects: [persist("game-phase")],
})

export const drawerState = atom<boolean>({
    key: "drawerState",
    default: false,
    effects: [persist('drawer-state')],
})

export enum AvatarEnum {
    dog0,
    dog1,
    dog2,
    dog3,
}

export const players = atomFamily<PlayerData, string>({
    key: "players",
    default: {
        name: "",
        avatar: AvatarEnum.dog0,
    },
    effects: [persist("players")],
})

const playersIds = atom<string[]>({
    key: "playersIds",
    default: [],
    effects: [persist('players-ids')],
})

interface PlayerData {
    name: string
    avatar: AvatarEnum
}

export interface Player {
    id: string
    data: PlayerData
}

export const MAX_PLAYERS_COUNT = 4

export const getAvailableAvatar = selector<AvatarEnum>({
    key: "getAvailableAvatar",
    get({ get }) {
        const taken = get(playersData).map(({ data: { avatar } }) => avatar)
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

const getDogName = (get: GetRecoilValue, sex?: "male" | "female") => {
    const dogs = sex ? sex === "male" ? dogNamesMale : dogNamesFemale : dogNames
    const taken = get(playersData).map(({ data: { name } }) => name)
    let index

    do {
        index = getRandomInt(0, dogs.length - 1)
    } while (taken.includes(dogs[index]))

    return dogs[index]
}

export const getRandomDogNameBySex = selector({
    key: "getRandomDogNameBySex",
    get: ({ get }) => () => getDogName(get),
})

export const getRandomDogName = selector({
    key: "getRandomDogName",
    get: ({ get }) => getDogName(get),
})

export const editingInProgress = atom<boolean>({
    key: "editingInProgress",
    default: false,
})

export const addPlayer = selector<{ name: string, avatar: AvatarEnum }>({
    key: "addPlayer",
    get() {
        throw new Error("addPlayer: use only as setter")
    },
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            const id = makeId()
            const { name, avatar } = props
            set(playersIds, [...get(playersIds), id])
            set(players(id), { name, avatar })
        }
    },
})

export const removePlayer = selector<string>({
    key: "removePlayer",
    get() {
        throw new Error("removePlayer: use only as setter")
    },
    set({ get, set, reset }, id) {
        if (!(id instanceof DefaultValue)) {
            const playersArray = [...get(playersIds)]
            const index = playersArray.indexOf(id)
            if (index !== -1) {
                playersArray.splice(index, 1)
                set(playersIds, playersArray)
            }
            reset(players(id))
        }
    },
})

export const playersData = selector({
    key: "playersData",
    get: ({ get }) => (
        get(playersIds).map((id) => ({
            id,
            data: get(players(id)),
        }))
    ),
})

export type PlayersTotals = {
    [playerId: string]: number
}

export const playerTotals = selector({
    key: "playerTotals",
    get({ get }) {
        const players = get(playersData)
        const totals: PlayersTotals = {}

        players.forEach(({ id: playerId }) => {
            const points = get(playerPointsAtomFamily(playerId))
            totals[playerId] = Object.keys(points).reduce((prev, key) => {
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

export const playersCount = selector({
    key: "playersCount",
    get: ({ get }) => get(playersIds).length,
})

export const resetPlayers = selector<null>({
    key: "resetPlayers",
    get() {
        throw new Error("resetPlayers: use only as setter")
    },
    set({ get, reset }) {
        get(playersIds).forEach((id) => reset(players(id)))
        reset(playersIds)
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
    key: "dicesAtom",
    default: [-1, -1, -1, -1, -1],
    effects: [persist("dices")],
})

export type PlayerMove = [playerId: string, shot: number]

export const playerMoveAtom = atom<PlayerMove>({
    key: "playerMoveAtom",
    default: ['', 0],
    effects: [persist('player-move')],
})

export const startGameSelector = selector<boolean>({
    key: "startGameSelector",
    get() {
        throw new Error("startGameSelector: use only as setter")
    },
    set({ get, set }) {
        set(nextTurnAtom, true)
        set(gamePhase, GamePhases.IN_PLAY)
    },
})

export const MAX_SHOT_COUNT = 3

export const isShotAvailable = selector({
    key: "isShotAvailable",
    get: ({ get }) => get(playerMoveAtom)[1] >= MAX_SHOT_COUNT,
})

export const dicesSelectedAtom = atom<number[]>({
    key: "dicesSelectedAtom",
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
    set({ get, reset, set }) {
        reset(playerMoveAtom)
        reset(dicesAtom)
        reset(dicesSelectedAtom)
        reset(gamePhase)
        set(resetPlayers, null)
        // get(playersIds).forEach((id) => reset(players(id)))
        // reset(playersIds)

        // TODO
        // resetPlayerPoints()
        // resetHistory()
        // unselectAllDices()
        // changeActiveTab(ActiveTab.SETTINGS)
    },
})

export type Points = {
    [key in Combination]?: number
}

export const playerPointsAtomFamily = atomFamily<Points, string>({
    key: "playerPointsAtomFamily",
    default: {},
    effects: [persist("player-points")],
})

export const isMoveAvailableSelector = selector<boolean>({
    key: "isMoveAvailableSelector",
    get({ get }) {
        const [activePlayerId, shot] = get(playerMoveAtom)
        const player = get(playerPointsAtomFamily(activePlayerId))
        const dices = get(dicesAtom)

        let matchesCount = 0
        let noMoves = false

        combinationsData.forEach(({ combination }) => {
            const { points } = checkMatch(combination, dices)
            const isInPlayerPoints = combination !== Combination.BONUS && player && !!player[combination]

            /**
             * Combination matched AND player hasn't this combination
             */
            if (points !== undefined && !isInPlayerPoints) {
                matchesCount = matchesCount + 1
            }

            /**
             * If no matches, no more shots and player already have this combination
             */
            if (points === undefined && shot === MAX_SHOT_COUNT) {
                noMoves = true
            }
        })

        return !(matchesCount === 0 && noMoves)
    },
})
