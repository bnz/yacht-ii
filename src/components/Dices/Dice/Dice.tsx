import React, { FC } from 'react'
import { DiceDot } from './DiceDot'
import cx from "classnames"
import { useTheme } from "../../../helpers/useTheme"
import icon from "../../../icons/icon.svg"
import faceIcon from "../../../icons/face.svg"
import faceDarkIcon from "../../../icons/face-dark.svg"

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
    index: number

    onClick?(): void
}

const array9 = [...window.Array(9).keys()]

export const Dice: FC<DiceProps> = ({ value, roll, selected, onClick, index }) => {
    const isDark = useTheme(true)

    return (
        // m-[0.333em]
        <div className="relative w-[2em] min-w-[2em] max-w-[2em] h-[2em] flex-wrap flex-grow" onClick={onClick}>
            <div
                className={cx(
                    "flex flex-wrap",
                    "bg-white dark:bg-black",
                    "rounded-[.2em]",
                    "w-[1.8em] max-w-[1.8em] min-w-[1.8em] h-[1.8em]",
                    "duration-300",
                )}
                style={{
                    // transform: "translateX(-50%)",
                    transform: roll ? `rotate(${359 * (index % 2 === 1 ? 1 : -1)}deg)` : 'none',
                    boxShadow: selected
                        ? isDark
                            ? `rgba(255, 255, 255, 0.5) 0 0 0 2px`
                            : '0 0 .2em rgba(0, 0, 0, 1)'
                        : '0 0 .1em rgba(0, 0, 0, .4)',
                }}
            >
                {roll ? (
                    <div
                        className="bg-no-repeat bg-center bg-contain absolute left-2 right-2 top-2 bottom-2"
                        style={{ backgroundImage: `url('${isDark ? faceDarkIcon : faceIcon}')` }}
                    />
                ) : array9.map((i) => (
                    <DiceDot key={i} filled={dots[value] && dots[value].indexOf(i + 1) !== -1} />
                ))}
            </div>
        </div>
    )
}
