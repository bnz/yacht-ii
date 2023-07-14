import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { FC, useEffect } from "react"

type Themes = "dark" | "light"

const fn = (e: any): Themes => e.matches ? "dark" : "light"

const theme = atom({
    key: "theme",
    default: window.matchMedia ? fn(window.matchMedia("(prefers-color-scheme: dark)")) : "light",
})

export const InitThemeChangeWatch: FC = () => {
    const setState = useSetRecoilState(theme)

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => setState(fn(event)))
    }, [setState])

    return null
}

export const useTheme = () => useRecoilValue(theme)
