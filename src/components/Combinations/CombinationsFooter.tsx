import cx from "classnames"
import { players } from "@store/players/players"

const common = "h-7"

export function CombinationsFooter() {
    return (
        <>
            <div className={common} />
            {players.dataActiveFirst.map(function ({ id }) {
                return (
                    <div key={id} className={cx(
                        common,
                        players.activeId === id && "bg-[--background-color-active] rounded-bl-3xl rounded-br-3xl",
                    )} />
                )
            })}
            <div className={common} />
        </>
    )
}
