import { atom } from "recoil"

export enum GamePhases {
    PRE_GAME = 'preGame',
    PLAYERS_SELECTION = 'playersSelection',
    IN_PLAY = 'inPlay',
}

const localStorageEffect = (key: string) => ({ setSelf, onSet }: { setSelf: any, onSet: any }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue))
    })
}

export const gamePhase = atom<GamePhases>({
    key: "game",
    default: GamePhases.PRE_GAME,
    effects: [
        localStorageEffect('game-phase'),
    ],
})
