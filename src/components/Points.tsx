import type { checkMatch } from "../helpers/checkMatch"
import { i18n } from "@helpers/i18n"

interface PointsProps {
    points: ReturnType<typeof checkMatch>['points'],
    maxPoints: ReturnType<typeof checkMatch>['maxPoints'],
}

export function Points({ points, maxPoints }: PointsProps) {
    return (points !== undefined) && (maxPoints !== undefined) && (points < maxPoints)
        ? (
            <>
                {points}
                <span className="ml-1 italic">
                    {`${i18n('ofMax')} ${maxPoints}`}
                </span>
            </>
        )
        : <>{points}</>
}
