import { PlayerData, Players, players, update } from "@signals/players/players"

type Callback = (players: Players) => Players

export function updatePlayerById(...args: [id: string, data: PlayerData]): void
export function updatePlayerById(...args: [id: Callback]): void
export function updatePlayerById(...args: [id: string | Callback, data?: PlayerData]): void {
    const allPlayers = JSON.parse(JSON.stringify(players.value)) as Players
    const [arg, data] = args

    if (typeof arg === "function") {
        update(arg(allPlayers))
    } else if (data) {
        allPlayers[arg] = data
        update(allPlayers)
    }
}
