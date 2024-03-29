import { inArray } from './inArray'
import { i18n } from './i18n'

function calc(n: number) {
    return function (...sequence: number[]): boolean {
        return inArray(sequence, n % 10)
    }
}

export function defineWorkEnding(n: number): string | undefined {
    const calculated = calc(n)

    if (inArray([11, 12, 13, 14], n)) {
        return i18n('points1')
    }

    if (calculated(1)) {
        return i18n('points2')
    }

    if (calculated(2, 3, 4)) {
        return i18n('points3')
    }

    if (calculated(0, 5, 6, 7, 8, 9)) {
        return i18n('points4')
    }
}
