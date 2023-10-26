import { useCallback, useState } from "react"
import { EditName } from "./EditName"
import { Row } from "./Row"
import { ItemWrap } from "./ItemWrap"
import { useSetRecoilState } from "recoil"
import { editingInProgress } from "../../recoil/atoms"

interface PlayersListItemProps {
    id: string
}

export function PlayersListItem({ id }: PlayersListItemProps) {
    const [edit, setEdit] = useState(false)
    const toggle = useCallback(function () {
        return setEdit(function (prev) {
            return !prev
        })
    }, [setEdit])
    const [flash, setFlash] = useState<boolean>(false)
    const setEditingInProgress = useSetRecoilState(editingInProgress)

    const rowCallback = useCallback(function () {
        toggle()
        setEditingInProgress(true)
    }, [toggle, setEditingInProgress])

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
                        setEditingInProgress(false)
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
