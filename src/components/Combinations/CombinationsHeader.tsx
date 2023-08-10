import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"
import { Avatar } from "../Players/Avatar"
import { useRecoilValue } from "recoil"
import { playersData } from "../../atoms"

export const CombinationsHeader: FC = () => (
    <>
        <div className="border-b px-2 sticky top-0 left-0 bg-[var(--background-color)] z-[2]">
            {i18n('combinations')}
        </div>
        {useRecoilValue(playersData).map(({ id, data: { name, avatar } }) => (
            <div key={id} className="border-b flex flex-row justify-center items-center gap-3 !p-0 sticky top-0 bg-[var(--background-color)]">
                <Avatar avatar={avatar} className="!w-20" />
                <div className="absolute bottom-0 left-1/2 translate-x-6">
                    {name}
                </div>
            </div>
        ))}
        <div className="border-b sticky top-0 bg-[var(--background-color)]" />
    </>
)
