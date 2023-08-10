import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
// import { playersColsStyle, wrapClassName } from "./Combinations"
import { useRecoilValue } from "recoil"
import { playersData } from "../../atoms"

export const CombinationsFooter: FC = () => {
    const players = useRecoilValue(playersData)

    return (
        <>
            {/*<div className="sticky bottom-0 shadow-2xl backdrop-blur-lg !p-0">*/}
            {/*    <div className={wrapClassName} style={{*/}
            {/*        gridTemplateColumns: playersColsStyle[players.length],*/}
            {/*    }}>*/}
                    <div className="sticky bottom-0 left-0 px-2 bg-[var(--background-color)] z-[4]">
                        {i18n('total')}
                    </div>
                    {players.map(({ id, data: { name } }) => (
                        <div key={id} className="sticky bottom-0 text-center bg-[var(--background-color)] z-[3]">
                            {name}
                        </div>
                    ))}
                    <div className="sticky bottom-0 bg-[var(--background-color)] z-[3]" />
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
