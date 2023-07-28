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
    get: () => ({ id: "", data: { name: "" } }),
    set: ({ get, set }, props) => {
        if (!(props instanceof DefaultValue)) {
            const { id, data } = props
            set(playersIds, [...get(playersIds), id])
            set(players(id), data)
        }
    },
})

export const removePlayer = selector<Player>({
    key: "removePlayer",
    get: () => ({ id: "", data: { name: "" } }),
    set: ({ get, set, reset }, props) => {
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
