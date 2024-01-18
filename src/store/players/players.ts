import { AvatarEnum, MAX_PLAYERS_COUNT, MAX_SHOT_COUNT } from "../../recoil/atoms"
import { builder } from "@helpers/localStorage"
import { computed } from "@preact/signals-react"
import { createCopy } from "@helpers/createCopy"
import { makeId } from "@helpers/makeId"
import type { Player, PlayerData, PlayerMove, Players, PlayersTotals, Points, Result } from "@store/types"
import { getRandomInt } from "@helpers/random"
import { activePlayerFirst } from "@store/players/activePlayerFirst"
import { Combination } from "@components/Combinations/combinationsData"
import { ColumnView, ColumnViewEnum } from "@store/types"

export const players = (function (): Result<Players, PlayerData> {
    const { signal, update } = builder<Players>("players", {})

    const {
        signal: playersIdsSignal,
        update: updatePlayersIds,
    } = builder<string[]>("playersIds", [])

    const {
        signal: move,
        update: updateMove,
    } = builder<PlayerMove>("playerMove", ["", 0])

    const {
        signal: points,
        update: updatePoints,
    } = builder<Record<string, Points>>("playerPoints", {})

    const {
        signal: columnView,
        update: updateColumnView,
    } = builder<ColumnView>("namesColumnView", {})

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

        ids: {
            get value() {
                return playersIdsSignal.value
            },
            update(value) {
                updatePlayersIds(value)
            },
            reset() {
                updatePlayersIds([])
            },
        },

        move: {
            get value() {
                return move.value
            },
            update(value) {
                updateMove(value)
            },
            reset() {
                this.update(["", 0])
            },
        },

        points: {
            get value() {
                return points.value
            },
            get active() {
                return computed(() => {
                    return this.value[players.activeId] || {}
                }).value
            },
            get totals() {
                return computed(() => {
                    const totals: PlayersTotals = {}

                    players.data.forEach(({ id: playerId }) => {
                        const points = this.get(playerId)
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
                updatePoints(value)
            },
            updateActive(points) {
                const copy = createCopy(this.value)
                copy[players.activeId] = points
                this.update(copy)
            },
            get(playerId) {
                return this.value[playerId] || {}
            },
            reset() {
                this.update({})
            },
        },

        columnView: {
            get value() {
                return columnView.value
            },
            get active() {
                return this.value[players.activeId] || ColumnViewEnum.text
            },
            reset() {
                updateColumnView({})
            },
            toggleActive() {
                let copy = createCopy(this.value)
                if (!copy[players.activeId]) {
                    copy = {
                        ...copy,
                        [players.activeId]: ColumnViewEnum.text,
                    }
                }
                copy[players.activeId] = copy[players.activeId] === ColumnViewEnum.text
                    ? ColumnViewEnum.preview
                    : ColumnViewEnum.text
                updateColumnView(copy)
            },
        },
    }
})()
