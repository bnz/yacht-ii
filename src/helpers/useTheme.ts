import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { useEffect } from "react"

export type Themes = "dark" | "light"

function fn(e: any): Themes {
    return e.matches ? "dark" : "light"
}

const theme = atom<Themes>({
    key: "theme",
    default: window.matchMedia ? fn(window.matchMedia("(prefers-color-scheme: dark)")) : "light",
})

export function InitThemeChangeWatch() {
    const setState = useSetRecoilState(theme)

    useEffect(function () {
        const MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

        if (MediaQueryList.matches) {
            setState("dark")
        }

        MediaQueryList.addEventListener('change', function (event) {
            setState(fn(event))
        })
    }, [setState])

    return null
}

export function useTheme(isDark?: undefined): Themes
export function useTheme(isDark?: boolean): boolean
export function useTheme(isDark?: boolean) {
    const t = useRecoilValue(theme)

    if (isDark) {
        return t === "dark"
    }
    return t
}
