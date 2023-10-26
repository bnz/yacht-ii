import { i18n } from "../../helpers/i18n/i18n"

export enum Combination {
    ONE = 1,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    BONUS = 'bonus',
    SMALL_STRAIGHT = 'smallStraight',
    BIG_STRAIGHT = 'bigStraight',
    TWO_PAIR = 'twoPair',
    FULL_HOUSE = 'fullHouse',
    THE_YACHT = 'theYacht',
    CHANCE = 'chance',
    EQUAL_3 = 'equal_3',
    EQUAL_4 = 'equal_4',
}

export interface CombinationInfo {
    name: string
    title: string
    combination: Combination
    min?: number
    max: number
}

const DICES_COUNT = 5

export const EMPTY_CELL = '—'

export const BONUS_CONDITION = 63

export const BONUS_POINTS = 35

export const isBonus = function (combination: Combination) {
    return combination === Combination.BONUS
}

export const combinationsData: CombinationInfo[] = [
    {
        name: i18n('combination.1'),
        title: i18n('combination.1.title'),
        combination: Combination.ONE,
        min: Combination.ONE * 3,
        max: Combination.ONE * DICES_COUNT,
    },
    {
        name: i18n('combination.2'),
        title: i18n('combination.2.title'),
        combination: Combination.TWO,
        min: Combination.TWO * 3,
        max: Combination.TWO * DICES_COUNT,
    },
    {
        name: i18n('combination.3'),
        title: i18n('combination.3.title'),
        combination: Combination.THREE,
        min: Combination.THREE * 3,
        max: Combination.THREE * DICES_COUNT,
    },
    {
        name: i18n('combination.4'),
        title: i18n('combination.4.title'),
        combination: Combination.FOUR,
        min: Combination.FOUR * 3,
        max: Combination.FOUR * DICES_COUNT,
    },
    {
        name: i18n('combination.5'),
        title: i18n('combination.5.title'),
        combination: Combination.FIVE,
        min: Combination.FIVE * 3,
        max: Combination.FIVE * DICES_COUNT,
    },
    {
        name: i18n('combination.6'),
        title: i18n('combination.6.title'),
        combination: Combination.SIX,
        min: Combination.SIX * 3,
        max: Combination.SIX * DICES_COUNT,
    },
    {
        name: i18n('combination.bonus'),
        title: i18n('combination.bonus.title'),
        combination: Combination.BONUS,
        max: BONUS_POINTS,
    },
    {
        name: i18n('combination.threeOfAKind'),
        title: i18n('combination.threeOfAKind.title'),
        combination: Combination.EQUAL_3,
        min: Combination.ONE * 3,
        max: Combination.SIX * 3,
    },
    {
        name: i18n('combination.equal_4'),
        title: i18n('combination.equal_4.title'),
        combination: Combination.EQUAL_4,
        min: Combination.ONE * 4,
        max: Combination.SIX * 4,
    },
    {
        name: i18n('combination.smallStraight'),
        title: i18n('combination.smallStraight.title'),
        combination: Combination.SMALL_STRAIGHT,
        max: 25,
    },
    {
        name: i18n('combination.bigStraight'),
        title: i18n('combination.bigStraight.title'),
        combination: Combination.BIG_STRAIGHT,
        max: 30,
    },
    {
        name: i18n('combination.twoPair'),
        title: i18n('combination.twoPair.title'),
        combination: Combination.TWO_PAIR,
        max: 25,
    },
    {
        name: i18n('combination.fullHouse'),
        title: i18n('combination.fullHouse.title'),
        combination: Combination.FULL_HOUSE,
        max: 30,
    },
    {
        name: i18n('combination.theYacht'),
        title: i18n('combination.theYacht.title'),
        combination: Combination.THE_YACHT,
        max: 50,
    },
    {
        name: i18n('combination.chance'),
        title: i18n('combination.chance.title'),
        combination: Combination.CHANCE,
        min: Combination.ONE * 5,
        max: Combination.SIX * 5,
    },
]

export const MAX_POSSIBLE_POINTS = combinationsData.reduce(function (prev, curr) {
    return prev + curr.max
}, 0)
