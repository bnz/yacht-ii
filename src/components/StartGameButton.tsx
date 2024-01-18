import { i18n } from "@helpers/i18n"
import { ButtonWithIcon } from "./ButtonWithIcon"
import cx from "classnames"
import { GamePhases, updateGamePhase } from "@store/gamePhase"
import { childPlay } from "@store/childPlay"
import { players } from "@store/players/players"
import { startGameButtonDisabled } from "@store/startGameButtonDisabled"

export function StartGameButton() {
    return (
        <ButtonWithIcon
            icon="casino"
            disabled={startGameButtonDisabled.value}
            onClick={function () {
                players.nextTurn()
                updateGamePhase(childPlay.value ? GamePhases.CHILD_PLAY : GamePhases.IN_PLAY)
            }}
            className={cx(
                "my-10 text-3xl !py-5 !pl-24 !pr-10 inline-block mx-auto",
                "!bg-[24px_center] bg-[length:50px_50px]",
                "[&:not([disabled])]:animate-pulse hover:animate-none",
            )}
        >
            {i18n('button.startGame')}
        </ButtonWithIcon>
    )
}
