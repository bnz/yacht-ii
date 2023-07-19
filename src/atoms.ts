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

const players = atomFamily<string, string>({
    key: "players",
    default: "",
    effects: [persist("players")],
})

const playersIds = atom<string[]>({
    key: "playersIds",
    default: [],
    effects: [persist('players-ids')],
})

interface Player {
    id: string
    name: string
}

export const addPlayer = selector<Player>({
    key: "addPlayer",
    get: () => ({ id: "", name: "" }),
    set: ({ get, set }, props) => {
        if (!(props instanceof DefaultValue)) {
            const { id, name } = props
            set(playersIds, [...get(playersIds), id])
            set(players(id), name)
        }
    },
})

export const removePlayer = selector<Player>({
    key: "removePlayer",
    get: () => ({ id: "", name: "" }),
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
            name: get(players(id)),
        }))
    ),
})
