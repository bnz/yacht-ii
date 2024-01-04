import { effect, signal } from "@preact/signals-react"

let defaultState = false

try {
    const data = localStorage.getItem("drawer-state")

    if (data !== null) {
        defaultState = JSON.parse(data)
    }
} catch (e) {
    console.log(e)
}

export const drawer = signal<boolean>(defaultState)

export function toggle(): void {
    drawer.value = !drawer.value
}

export function update(value: boolean) {
    drawer.value = value
}

effect(function () {
    try {
        localStorage.setItem("drawer-state", JSON.stringify(drawer.value))
    } catch (e) {
        console.error(e)
    }
})
