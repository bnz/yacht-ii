import React, { FC } from 'react'
import { DiceDot } from './DiceDot'
import cx from "classnames"
import { useTheme } from "../../../helpers/useTheme"

const dots: { [key: number]: number[] } = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
}

interface DiceProps {
    value: number
    roll?: boolean
    selected?: boolean

    onClick?(): void
}

const array9 = [...window.Array(9).keys()]

export const Dice: FC<DiceProps> = ({ value, roll, selected, onClick }) => {
    const theme = useTheme()

    return (
        <div className="w-[2em] min-w-[2em] max-w-[2em] h-[2em] m-[0.333em] flex-wrap flex-grow" onClick={onClick}>
            <div
                className={cx(
                    "flex flex-wrap",
                    "bg-black dark:bg-white",
                    "rounded-[.2em]",
                    "w-[1.8em] max-w-[1.8em] min-w-[1.8em] h-[1.8em]",
                    "duration-300",
                )}
                style={{
                    transform: roll ? 'rotate(359deg)' : 'none',
                    boxShadow: selected
                        ? theme === 'dark'
                            ? `rgba(0, 0, 0, 1) 0 0 0 2px`
                            : '0 0 .2em rgba(0, 0, 0, 1)'
                        : '0 0 .1em rgba(0, 0, 0, .4)',
                }}
            >
                {array9.map((i) => {
                    // console.log(dots[value])

                    return (
                        <DiceDot
                            key={i}
                            roll={roll}
                            filled={dots[value] && dots[value].indexOf(i + 1) !== -1}
                        />
                    )
                })}
            </div>
        </div>
    )
}
