import { useCallback, useState } from "react"
import { EditName } from "./EditName"
import { Row } from "./Row"
import { ItemWrap } from "./ItemWrap"
import { useStateToggle } from '@helpers/useStateToggle'
import { updateEditingInProgress } from "@store/editingInProgress"

interface PlayersListItemProps {
    id: string
}

export function PlayersListItem({ id }: PlayersListItemProps) {
    const [edit, toggle] = useStateToggle()
    const [flash, setFlash] = useState<boolean>(false)
    const rowCallback = useCallback(function () {
        toggle()
        updateEditingInProgress(true)
    }, [toggle])

    return (
        <ItemWrap>
            {edit ? (
                <EditName
                    id={id}
                    callback={function (needFlash) {
                        if (needFlash) {
                            setFlash(true)
                        }
                        toggle()
                        updateEditingInProgress(false)
                    }}
                />
            ) : (
                <Row
                    id={id}
                    callback={rowCallback}
                    flash={flash}
                    flashEnd={function () {
                        setFlash(false)
                    }}
                />
            )}
        </ItemWrap>
    )
}
