import { selector } from "recoil"
import { playerMoveAtom } from "../atoms/players/playerMove"
import { Combination, combinationsData } from "../../components/Combinations/combinationsData"
import { checkMatch } from "../../helpers/checkMatch"
import { dicesAtom, MAX_SHOT_COUNT, playerPointsAtomFamily } from "../atoms"

export const isMoveAvailableSelector = selector<boolean>({
    key: "isMoveAvailableSelector",
    get({ get }) {
        const [activePlayerId, shot] = get(playerMoveAtom)
        const playerPoints = get(playerPointsAtomFamily(activePlayerId))
        const dices = get(dicesAtom)

        let matchesCount = 0
        let noMoves = false

        let a = false

        combinationsData.forEach(({ combination }) => {
            const { points } = checkMatch(combination, dices)
            const isInPlayerPoints = combination !== Combination.BONUS && playerPoints && !!playerPoints[combination]


            // console.log({
            //     combination,
            //     points,
            // })
            if (combination === "theYacht") {
            }

            /**
             * Combination matched AND player hasn't this combination
             */
            if (points !== undefined && !isInPlayerPoints) {
                if (combination === "theYacht") {
                    a = true
                    // console.log(combination, 1)
                }
                matchesCount = matchesCount + 1
            }

            /**
             * If no matches, no more shots and player already have this combination
             */
            if (points === undefined && shot === MAX_SHOT_COUNT) {
                if (combination === "theYacht") {
                    a = true
                    // console.log(combination, 2)
                }
                noMoves = true
            }
        })

        // if (a) {
        //     console.log(
        //         { matchesCount },
        //         { noMoves },
        //         !(matchesCount === 0 && noMoves),
        //     )
        // }

        // console.log(
        //     "RESULT:", !(matchesCount === 0 && noMoves)
        // )

        return !(matchesCount === 0 && noMoves)
    },
})
