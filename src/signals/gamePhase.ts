import { computed, effect, signal } from "@preact/signals-react"
import { restoreState, saveState } from "@helpers/localStorage"

export enum GamePhases {
    PRE_GAME = 'preGame',
    PLAYERS_SELECTION = 'playersSelection',
    IN_PLAY = 'inPlay',
    CHILD_PLAY = 'childPlay',
}

export const gamePhase = signal(restoreState<GamePhases>("game-phase-", GamePhases.PRE_GAME))

export function update(value: GamePhases) {
    gamePhase.value = value
}

export const isInPlay = computed(function () {
    return gamePhase.value === GamePhases.IN_PLAY || gamePhase.value === GamePhases.CHILD_PLAY
})

effect(function () {
    saveState("game-phase-", gamePhase.value)
})
