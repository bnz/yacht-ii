import { AvatarEnum, MAX_PLAYERS_COUNT, MAX_SHOT_COUNT } from "../../recoil/atoms"
import { builder } from "@helpers/localStorage"
import { computed } from "@preact/signals-react"
import { createCopy } from "@helpers/createCopy"
import { makeId } from "@helpers/makeId"
import type {
    Player,
    PlayerData,
    PlayerMove,
    Players,
    PlayersTotals,
    Points,
    PlayersStore,
    PlayerPoints,
} from "@store/types"
import { getRandomInt } from "@helpers/random"
import { activePlayerFirst } from "@store/players/activePlayerFirst"
import { Combination } from "@components/Combinations/combinationsData"
import { ColumnView, ColumnViewEnum, Ids, NamesColumnView, PlayersMoveStore } from "@store/types"

function columnView(): NamesColumnView {
    const { signal, update } = builder<ColumnView>("columnView", {})

    const active = computed(function () {
        return signal.value[players.activeId] || ColumnViewEnum.text
    })

    const isText = computed(function () {
        return active.value === ColumnViewEnum.text
    })

    return {
        get value() {
            return signal.value
        },
        get active() {
            return active.value
        },
        get isText() {
            return isText.value
        },
        reset() {
            update({})
        },
        toggleActive() {
            let copy = createCopy(signal.value)
            if (!copy[players.activeId]) {
                copy = {
                    ...copy,
                    [players.activeId]: ColumnViewEnum.text,
                }
            }
            copy[players.activeId] = isText.value ? ColumnViewEnum.preview : ColumnViewEnum.text
            update(copy)
        },
    }
}

function points(): PlayerPoints {
    const { signal, update } = builder<Record<string, Points>>("playerPoints", {})

    const active = computed(function () {
        return signal.value[players.activeId] || {}
    })

    return {
        get value() {
            return signal.value
        },
        get active() {
            return active.value
        },
        get totals() {
            return computed(() => {
                const totals: PlayersTotals = {}

                players.data.forEach(({ id: playerId }) => {
                    const points = signal.value[playerId]

                    console.log({
                        points,
                    })

                    totals[playerId] = Object.keys(points).reduce(function (prev, key) {
                        const curr = points[key as Combination]!
                        if (key === Combination.BONUS && Math.sign(curr) === -1) {
                            return prev
                        }
                        return prev + curr
                    }, 0)
                })
                return totals
            }).value
        },
        update(value) {
            update(value)
        },
        updateActive(points) {
            const copy = createCopy(signal.value)
            copy[players.activeId] = points
            update(copy)
        },
        get(playerId) {
            return signal.value[playerId] || {}
        },
        reset() {
            update({})
        },
    }
}

function ids(): Ids {
    const { signal, update } = builder<string[]>("playersIds", [])

    return {
        get value() {
            return signal.value
        },
        update(value) {
            update(value)
        },
        reset() {
            update([])
        },
    }
}

function move(): PlayersMoveStore {
    const { signal, update } = builder<PlayerMove>("playerMove", ["", 0])

    return {
        get value() {
            return signal.value
        },
        update(value) {
            update(value)
        },
        reset() {
            update(["", 0])
        },
    }
}

export const players = (function (): PlayersStore {
    const { signal, update } = builder<Players>("players", {})

    return {
        get value() {
            return signal.value
        },
        get active() {
            return computed<PlayerData>(() => {
                return signal.value[this.activeId]
            }).value
        },
        get activeId() {
            return computed<string>(() => {
                return this.move.value[0]
            }).value
        },
        get activeShot() {
            return computed<number>(() => {
                return this.move.value[1]
            }).value
        },
        get isShotAvailable() {
            return computed<boolean>(() => {
                return this.activeShot >= MAX_SHOT_COUNT
            }).value
        },
        get data() {
            return computed<Player[]>(() => {
                return this.ids.value.map((id) => {
                    return {
                        id,
                        data: this.getById(id),
                    }
                })
            }).value
        },
        get dataActiveFirst() {
            if (!activePlayerFirst.value) {
                return this.data
            }
            const players = createCopy(this.data)
            const index = players.findIndex(({ id }) => {
                return id === this.activeId
            })
            const beforeArray = players.slice(0, index)
            const arr = players.splice(index, players.length)
            return [...arr, ...beforeArray]
        },
        get count() {
            return computed<number>(() => {
                return this.ids.value.length
            }).value
        },
        get takenAvatars() {
            return computed<AvatarEnum[]>(() => {
                return this.data.map(function ({ data: { avatar } }) {
                    return avatar
                })
            }).value
        },
        get availableAvatar() {
            let avatar
            do {
                avatar = getRandomInt(0, MAX_PLAYERS_COUNT - 1)
            } while (this.takenAvatars.includes(avatar) && this.takenAvatars.length !== MAX_PLAYERS_COUNT)
            return avatar as AvatarEnum
        },
        getById(playerId) {
            return signal.value[playerId]
        },
        add({ name, avatar }) {
            const id = makeId()
            this.ids.update([...this.ids.value, id])
            this.update(id, { name, avatar })
        },
        update(playerIdOrUpdater, data) {
            const copy = createCopy(signal.value)
            if (typeof playerIdOrUpdater === "function") {
                update(playerIdOrUpdater(copy))
            } else if (data) {
                copy[playerIdOrUpdater] = data
                update(copy)
            }
        },
        remove(playerId) {
            const playersArray = [...this.ids.value]
            const index = playersArray.indexOf(playerId)
            if (index !== -1) {
                playersArray.splice(index, 1)
                this.ids.update(playersArray)
            }
            const copy = createCopy(signal.value)
            delete copy[playerId]
            update(copy)
        },
        reset() {
            update({})
            this.ids.reset()
            this.move.reset()
        },
        nextTurn() {
            const players = this.data
            let playerId = this.activeId

            if (!playerId) {
                playerId = players[0].id
            } else {
                const index = players.findIndex(function ({ id }) {
                    return id === playerId
                })
                const player = players[index + 1]
                playerId = player ? player.id : players[0].id
            }
            this.move.update([playerId, 0])
        },

        ids: ids(),
        move: move(),
        points: points(),
        columnView: columnView(),
    }
})()
