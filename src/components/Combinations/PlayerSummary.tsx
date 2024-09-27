import { players } from "@store/players/players"
import { useStateToggle } from "@helpers/useStateToggle"
import cx from "classnames"
import { createPortal } from "react-dom"
import { KeyboardActions } from "@helpers/KeyboardActions"
import { Backdrop } from "@components/Backdrop"
import { ButtonWithIcon } from "@components/ButtonWithIcon"
import { Avatar } from "@components/Players/Avatar"
import { PropsWithChildren } from "react"

type PlayerSummaryProps = PropsWithChildren<{
    playerId: string
}>

export function PlayerSummary({ playerId, children }: PlayerSummaryProps) {
    const player = players.getById(playerId)
    const [open, toggle] = useStateToggle(false)

    return (
        <>
            <div onClick={toggle} className={cx(
                "cursor-pointer",
                "hover:shadow-md hover:outline hover:outline-[--line-color]",
                "active:shadow-inner",
                "grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr]",
                "rounded-full select-none",
            )}>
                {children}
            </div>
            {open && createPortal(
                <>
                    <KeyboardActions actions={{ Escape: toggle }} />
                    <Backdrop onClick={toggle} />
                    <div
                        className={cx(
                            "not-italic font-medium",
                            "fixed",
                            "left-1/2 -translate-y-1/2",
                            "top-1/2 -translate-x-1/2",
                            "md:min-w-96 max-w-screen-lg w-[95%] md:w-auto bg-[--background-color] shadow-2xl z-10 p-5 cursor-auto",
                            "border border-[--line-color] rounded",
                            "flex items-center justify-center"
                        )}
                    >
                        <ButtonWithIcon
                            onClick={toggle}
                            className="absolute right-2 top-2 w-10 h-10 !shadow-none !bg-transparent"
                            icon="close"
                        />
                        <Avatar
                            avatar={player.avatar}
                            className="!w-80 !h-80"
                            edit={function (avatarId: string) {
                                players.update(function (players) {
                                    players[playerId] = { ...players[playerId], avatar: avatarId }
                                    return players
                                })
                            }}
                        />
                    </div>
                </>,
                document.body,
            )}
        </>
    )
}
