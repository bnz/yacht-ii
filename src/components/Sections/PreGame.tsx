import type { PropsWithChildren } from "react"
import { gamePhase, GamePhases } from "../../recoil/atoms"
import { i18n } from "../../helpers/i18n/i18n"
import { Rules } from "../Rules/Rules"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useTheme } from "../../helpers/useTheme"
import cx from "classnames"
import logoIconWhite from "../../icons/logo-white.svg"
import logoIconBlack from "../../icons/logo-black.svg"
import { GameHeading } from "../GameHeading"
import { P } from "../Rules/P"
import { Footer } from "../Footer"
import { scrolledTo } from "../../recoil/atoms/scrolledTo"
import { startTransition } from 'react'

function Heading() {
    return (
        <GameHeading className={cx(
            "bg-[--background-color] z-10",
            "transition-shadow",
            useRecoilValue(scrolledTo) === "logo" ? "shadow-lg" : "shadow-none",
        )} />
    )
}

function ButtonWrapper({ children }: PropsWithChildren<{}>) {
    return (
        <div className={cx(
            "sticky top-12 md:top-32 bg-[--background-color] py-5 my-5 lg:my-10",
            "transition-shadow",
            useRecoilValue(scrolledTo) === "button" && "shadow-lg",
        )}>
            {children}
        </div>
    )
}

export default function PreGame() {
    const setPhase = useSetRecoilState(gamePhase)
    const isDark = useTheme(true)

    return (
        <>
            <Heading />
            <div
                className={cx(
                    "w-56 md:w-72 lg:w-96 h-56 md:h-72 lg:h-96",
                    "mx-auto my-5 lg:my-10",
                    "bg-no-repeat bg-contain",
                )}
                style={{ backgroundImage: `url('${isDark ? logoIconWhite : logoIconBlack}')` }}
            />
            <P className="text-2xl px-5 mx-auto text-center w-full md:w-2/3">
                {i18n('help.intro')}
            </P>
            <ButtonWrapper>
                <button
                    type="button"
                    className="text-xl lg:text-3xl lg:!py-5 !pr-10 !pl-16 lg:!pl-24 relative mx-auto block group"
                    onClick={function () {
                        startTransition(function () {
                            setPhase(GamePhases.PLAYERS_SELECTION);
                        })
                    }}
                >
                    <div
                        className="w-8 h-8 lg:w-12 lg:h-12 bg-no-repeat bg-contain absolute left-3 lg:left-7 top-2 lg:top-3 group-hover:animate-spin"
                        style={{ backgroundImage: `url('${isDark ? logoIconWhite : logoIconBlack}')` }}
                    />
                    {i18n('button.startNewGame')}
                </button>
            </ButtonWrapper>
            <Rules />
            <Footer />
        </>
    )
}
