import { atom, atomFamily, DefaultValue, selector, selectorFamily } from "recoil"

export enum GamePhases {
    PRE_GAME = 'preGame',
    PLAYERS_SELECTION = 'playersSelection',
    IN_PLAY = 'inPlay',
}

const localStorageEffect = (key: string, isArray?: boolean) => ({ setSelf, onSet, ...rest }: { setSelf: any, onSet: any }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
    }

    console.log(rest)

    onSet((newValue: any, prevValue: any, isReset: boolean) => {

        console.log({ newValue, prevValue })

        if (isReset) {
            localStorage.removeItem(key)
        } else {
            if (isArray) {
                // console.log(newValue)
            } else {
            }
            localStorage.setItem(key, JSON.stringify(newValue))
        }

        // isReset
        //     ? localStorage.removeItem(key)
        //     : localStorage.setItem(
        //         key,
        //         isArray
        //             ? JSON.stringify(newValue)
        //             : JSON.stringify(newValue),
        //     )
    })
}

export const gamePhase = atom<GamePhases>({
    key: "gamePhase",
    default: GamePhases.PRE_GAME,
    effects: [
        localStorageEffect('game-phase'),
    ],
})

export const drawerState = atom({
    key: "drawerState",
    default: false,
    effects: [
        localStorageEffect('drawer-state'),
    ],
})

const players = atomFamily<string, string>({
    key: "players",
    default: "",
    effects: [
        localStorageEffect('players', true),
    ],
})

const playersIds = atom<string[]>({
    key: "playersIds",
    default: [],
    effects: [
        localStorageEffect('players-ids'),
    ],
})

export const addPlayer = selector<{ id: string, name: string }>({
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

export const playersData = selector({
    key: "playersData",
    get: ({ get }) => {
        return get(playersIds).map((id) => {
            const name = get(players(id))
            return {
                id, name,
            }
        })
    },
})
