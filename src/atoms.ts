import { atom, atomFamily, DefaultValue, selector } from "recoil"

import { recoilPersist } from 'recoil-persist'

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

export const players = atomFamily<PlayerData, string>({
    key: "players",
    default: {
        name: "",
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
}

export interface Player {
    id: string
    data: PlayerData
}

export const addPlayer = selector<Player>({
    key: "addPlayer",
    get() {
        throw new Error("use only as setter")
    },
    set({ get, set }, props) {
        if (!(props instanceof DefaultValue)) {
            const { id, data } = props
            set(playersIds, [...get(playersIds), id])
            set(players(id), data)
        }
    },
})

export const removePlayer = selector<Player>({
    key: "removePlayer",
    get() {
        throw new Error("use only as setter")
    },
    set({ get, set, reset }, props) {
        if (!(props instanceof DefaultValue)) {
            const playersArray = [...get(playersIds)]
            const { id } = props
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

export const playersCount = selector({
    key: "playersCount",
    get: ({ get }) => get(playersIds).length,
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

type PlayerMove = [playerId: string, shot: number]

export const playerMoveAtom = atom<PlayerMove>({
    key: "playerMoveAtom",
    default: ['', 0],
    effects: [persist('player-move')],
})

export const MAX_SHOT_COUNT = 3

export const isMoveAvailable = selector({
    key: "isMoveAvailable",
    get: ({get}) => get(playerMoveAtom)[1] >= MAX_SHOT_COUNT
})

export const dicesSelectedAtom = atom<number[]>({
    key: "dicesSelectedAtom",
    default: [],
    effects: [persist('dices-selected')],
})

export const selectDice = selector<number>({
    key: "selectDice",
    get() {
        throw new Error("use only as setter")
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
        throw new Error("use only as setter")
    },
    set({ get, reset }) {
        reset(playerMoveAtom)
        reset(dicesAtom)
        reset(dicesSelectedAtom)
        reset(gamePhase)
        get(playersIds).forEach((id) => reset(players(id)))
        reset(playersIds)

        // TODO
        // resetPlayerPoints()
        // resetHistory()
        // unselectAllDices()
        // changeActiveTab(ActiveTab.SETTINGS)
    },
})
