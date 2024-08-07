import { theme, Themes } from "@store/theme"
import dog1Black from "@icons/dog1-black.svg"
import dog2Black from "@icons/dog2-black.svg"
import dog3Black from "@icons/dog3-black.svg"
import dog1BlackDisabled from "@icons/dog1-black-disabled.svg"
import dog2BlackDisabled from "@icons/dog2-black-disabled.svg"
import dog3BlackDisabled from "@icons/dog3-black-disabled.svg"
import dog1White from "@icons/dog1-white.svg"
import dog2White from "@icons/dog2-white.svg"
import dog3White from "@icons/dog3-white.svg"
import dog1WhiteDisabled from "@icons/dog1-white-disabled.svg"
import dog2WhiteDisabled from "@icons/dog2-white-disabled.svg"
import dog3WhiteDisabled from "@icons/dog3-white-disabled.svg"

export type Icons = Record<'normal' | 'disabled', string[]>

const dogs: Record<Themes, Icons> = {
    light: {
        normal: [dog1Black, dog2Black, dog3Black],
        disabled: [dog1BlackDisabled, dog2BlackDisabled, dog3BlackDisabled],
    },
    dark: {
        normal: [dog1White, dog2White, dog3White],
        disabled: [dog1WhiteDisabled, dog2WhiteDisabled, dog3WhiteDisabled],
    },
}

export function getDogs(): Icons {
    return dogs[theme.value]
}
