import { computed, signal } from "@preact/signals-react"

export type Themes = "dark" | "light"

function fn(e: any): Themes {
    return e.matches ? "dark" : "light"
}

const query = "(prefers-color-scheme: dark)"

export const theme = signal<Themes>(window.matchMedia ? fn(window.matchMedia(query)) : "light")

export const isDark = computed<boolean>(function () {
    return theme.value === "dark"
})

const MediaQueryList = window.matchMedia(query)

MediaQueryList.addEventListener('change', function (event) {
    theme.value = fn(event)
})
