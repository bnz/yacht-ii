import type { FC } from "react"
import { gamePhase, GamePhases } from "../../recoil/atoms"
import { i18n } from "../../helpers/i18n/i18n"
import { Heading, P, Rules } from "../Rules"
import { useSetRecoilState } from "recoil"
import { useTheme } from "../../helpers/useTheme"
import cx from "classnames"
import logoIconWhite from "../../icons/logo-white.svg"
import logoIconBlack from "../../icons/logo-black.svg"
import React from "react"

export const PreGame: FC = () => {
    const setPhase = useSetRecoilState(gamePhase)
    const isDark = useTheme(true)

    return (
        <div className="lg:w-2/3 mx-auto px-5">
            <Heading className="text-5xl lg:text-9xl font-thin text-center mt-10">{i18n("yacht")}</Heading>
            <div
                className={cx(
                    "w-56 lg:w-96 h-56 lg:h-96",
                    "mx-auto my-5 lg:my-10",
                    "bg-no-repeat bg-contain",
                )}
                style={{ backgroundImage: `url('${isDark ? logoIconWhite : logoIconBlack}')` }}
            />
            <P className="text-2xl px-5 text-center">{i18n('help.intro')}</P>
            <hr className="border-[var(--line-color)] my-5 lg:my-10" />
            <button
                type="button"
                className="text-2xl lg:text-3xl !py-5 !pr-10 !pl-24 relative mx-auto block group"
                onClick={() => setPhase(GamePhases.PLAYERS_SELECTION)}
            >
                <div
                    className="w-12 h-12 bg-no-repeat bg-contain absolute left-7 top-3 group-hover:animate-spin"
                    style={{ backgroundImage: `url('${isDark ? logoIconWhite : logoIconBlack}')` }}
                />
                {i18n('button.startNewGame')}
            </button>
            <hr className="border-[var(--line-color)] my-5 lg:my-10" />
            <Rules />
        </div>
    )
}
