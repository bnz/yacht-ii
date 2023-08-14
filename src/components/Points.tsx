import type { FC } from "react"
import { CheckMatch } from "../helpers/checkMatch"
import { i18n } from "../helpers/i18n/i18n"

interface PointsProps {
    points: ReturnType<CheckMatch>['points'],
    maxPoints: ReturnType<CheckMatch>['maxPoints'],
}

export const Points: FC<PointsProps> = ({ points, maxPoints }) =>
    (points !== undefined) && (maxPoints !== undefined) && (points < maxPoints)
        ? (
            <>
                {points}
                <span className="ml-1 italic">
                    {`${i18n('ofMax')} ${maxPoints}`}
                </span>
            </>
        )
        : <>{points}</>
