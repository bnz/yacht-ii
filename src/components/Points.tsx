import type { FC } from "react"
import { CheckMatch } from "../helpers/checkMatch"

interface PointsProps {
    points: ReturnType<CheckMatch>['points'],
    maxPoints: ReturnType<CheckMatch>['maxPoints'],
}

export const Points: FC<PointsProps> = ({ points }) => {
    return (
        <span>{points}</span>
    )
}
