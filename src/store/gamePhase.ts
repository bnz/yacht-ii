import { computed } from "@preact/signals-react"
import { builder } from "@helpers/localStorage"

export enum GamePhases {
    PRE_GAME,
    PLAYERS_SELECTION,
    IN_PLAY,
    CHILD_PLAY,
}

export const {
    signal: gamePhase,
    update: updateGamePhase,
} = builder<GamePhases>("gamePhase", GamePhases.PRE_GAME)

export const isInPlay = computed(function () {
    return gamePhase.value === GamePhases.IN_PLAY || gamePhase.value === GamePhases.CHILD_PLAY
})
