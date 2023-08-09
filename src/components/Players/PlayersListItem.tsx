import type { FC } from "react"
import { useCallback, useState } from "react"
import { EditName } from "./EditName"
import { Row } from "./Row"
import { ItemWrap } from "./ItemWrap"
import { useSetRecoilState } from "recoil"
import { editingInProgress } from "../../atoms"

interface PlayersListItemProps {
    id: string
    name: string
}

export const PlayersListItem: FC<PlayersListItemProps> = ({ id, name }) => {
    const [edit, setEdit] = useState(false)
    const toggle = useCallback(() => setEdit((prev) => !prev), [setEdit])
    const [flash, setFlash] = useState<boolean>(false)
    const setEditingInProgress = useSetRecoilState(editingInProgress)

    const rowCallback = useCallback(() => {
        toggle()
        setEditingInProgress(true)
    }, [toggle, setEditingInProgress])

    return (
        <ItemWrap>
            {edit ? (
                <EditName
                    id={id}
                    callback={(needFlash) => {
                        if (needFlash) {
                            setFlash(true)
                        }
                        toggle()
                        setEditingInProgress(false)
                    }}
                />
            ) : (
                <Row
                    id={id}
                    callback={rowCallback}
                    flash={flash}
                    flashEnd={() => setFlash(false)}
                />
            )}
        </ItemWrap>
    )
}
