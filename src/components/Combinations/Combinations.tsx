import type { FC } from "react"
import { combinationsData } from "./combinationsData"

export const Combinations: FC = () => {
    return (
        <div className="grid grid-cols-1">
            {combinationsData.map(({ name, title, combination }) => (
                <div key={name}>
                    <div>{name}</div>

                </div>
            ))}
        </div>
    )
}
