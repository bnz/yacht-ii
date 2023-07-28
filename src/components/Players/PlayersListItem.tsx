import type { FC } from "react"
import { useCallback, useState } from "react"
import { EditName } from "./EditName"
import { Row } from "./Row"
import { ItemWrap } from "./ItemWrap"

interface PlayersListItemProps {
    id: string
    name: string
}

export const PlayersListItem: FC<PlayersListItemProps> = ({ id, name }) => {
    const [edit, setEdit] = useState(false)
    const toggle = useCallback(() => setEdit((prev) => !prev), [setEdit])
    const [flash, setFlash] = useState<boolean>(false)

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
                    }}
                />
            ) : (
                <Row
                    id={id}
                    callback={toggle}
                    flash={flash}
                    flashEnd={() => setFlash(false)}
                />
            )}
        </ItemWrap>
    )
}
