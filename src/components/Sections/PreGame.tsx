import type { FC } from "react"
import { gamePhase, GamePhases } from "../../atoms"
import { i18n } from "../../helpers/i18n/i18n"
import { Rules } from "../Rules"
import { useSetRecoilState } from "recoil"
import { useTheme } from "../../helpers/useTheme"

import dog0Black from "../../icons/dog0-black.svg"
import dog0White from "../../icons/dog0-white.svg"
import dog1Black from "../../icons/dog1-black.svg"
import dog1White from "../../icons/dog1-white.svg"
import dog2Black from "../../icons/dog2-black.svg"
import dog2White from "../../icons/dog2-white.svg"
import dog3Black from "../../icons/dog3-black.svg"
import dog3White from "../../icons/dog3-white.svg"

export const PreGame: FC = () => {
    const setPhase = useSetRecoilState(gamePhase)
    const isDark = useTheme(true)

    return (
        <>
            <div className="p-5">
                <button type="button" onClick={() => setPhase(GamePhases.PLAYERS_SELECTION)}>
                    {i18n('button.startNewGame')}
                </button>
            </div>

            <div className="flex gap-3">
                <div
                    className="m-10 w-[358px] h-[358px] border bg-center bg-no-repeat bg-[length:75%] rounded-full"
                    style={{ backgroundImage: `url(${isDark ? dog0White : dog0Black})` }}
                />
                <div
                    className="m-10 w-[358px] h-[358px] border bg-center bg-no-repeat bg-[length:75%] rounded-full"
                    style={{ backgroundImage: `url(${isDark ? dog1White : dog1Black})` }}
                />
                <div
                    className="m-10 w-[358px] h-[358px] border bg-center bg-no-repeat bg-[length:75%] rounded-full"
                    style={{ backgroundImage: `url(${isDark ? dog2White : dog2Black})` }}
                />
                <div
                    className="m-10 w-[358px] h-[358px] border bg-center bg-no-repeat bg-[length:75%] rounded-full"
                    style={{ backgroundImage: `url(${isDark ? dog3White : dog3Black})` }}
                />
            </div>

            <Rules />
        </>
    )
}
