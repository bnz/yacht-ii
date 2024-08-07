import type { PropsWithChildren } from "react"
import cx from "classnames"
import { i18n } from "@helpers/i18n"
import { players } from "@store/players/players"
import { warIcons } from "@helpers/getWarIcons"
import { theme } from "@store/theme"

type LabelProps = PropsWithChildren<{
    htmlFor: HTMLLabelElement["htmlFor"]
    className?: string
}>

function Label({ htmlFor, className, children }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={cx(
                "p-3 cursor-pointer bg-[--line-color] rounded-xl text-center",
                className,
            )}
        >
            {children}
        </label>
    )
}

type TabsProps = {
    avatar: string
    onClick(avatar: string): void
}

function Heading({ children }: PropsWithChildren<{}>) {
    return (
        <h3 className="text-center font-bold py-5">
            {children}
        </h3>
    )
}

function Ul({ children }: PropsWithChildren<{}>) {
    return (
        <ul className="flex flex-grow flex-wrap gap-5 justify-center">
            {children}
        </ul>
    )
}

type LiProps = PropsWithChildren<{
    url: string
    isClickable: boolean
    selected: boolean
    taken: boolean
    onClick?(): void
}>

function Li({ url, isClickable, taken, selected, onClick, children }: LiProps) {
    return (
        <li className="text-center">
            <div
                className={cx(
                    "border-2 bg-no-repeat bg-center bg-[length:70%]",
                    "w-40 h-40",
                    "rounded-full mb-2",
                    isClickable && "cursor-pointer",
                    selected ? "border-[--text-color] bg-black/10" : "border-[--line-color]",
                    taken && !selected
                        ? ""
                        : cx(
                            "hover:border-[--text-color]",
                            "hover:shadow-inner",
                        ),
                )}
                style={{ backgroundImage: `url('${url}')` }}
                onClick={onClick}
            />
            {children}
        </li>
    )
}

function War({ avatar, onClick }: TabsProps) {
    return (
        <>
            <Heading>{i18n("chooseDog")}</Heading>
            <Ul>
                {Object.keys(warIcons).map(function (id) {
                    const url = warIcons[id]
                    const selected = avatar === id
                    const taken = players.takenAvatars.includes(id) // <--- TODO
                    const isClickable = !selected && !taken
                    const player = players.data.find(function ({ data: { avatar } }) {
                        return avatar === id
                    })

                    return (
                        <Li
                            key={url}
                            url={`${url}#${theme.value}${taken ? "-disabled" : ""}`}
                            isClickable={isClickable}
                            selected={selected}
                            taken={taken}
                            {...(isClickable ? {
                                onClick() {
                                    onClick(id)
                                },
                            } : {})}
                        >
                            {player && player.data.name}
                        </Li>
                    )
                })}
            </Ul>
        </>
    )
}

export function Tabs({ avatar, onClick }: TabsProps) {
    return (
        <div className="grid grid-cols-2 px-5 gap-5 mt-10">
            <input
                id="avatar-tab-1"
                type="radio"
                name="avatar-tab"
                className="peer/tab1 hidden appearance-none"
            />
            <input
                id="avatar-tab-2"
                name="avatar-tab"
                type="radio"
                className="peer/tab2 hidden appearance-none"
                defaultChecked
            />
            <Label htmlFor="avatar-tab-1" className="peer-checked/tab1:bg-[--text-color-semi]">
                dogs
            </Label>
            <Label htmlFor="avatar-tab-2" className="peer-checked/tab2:bg-[--text-color-semi]">
                war
            </Label>
            <div className="col-span-2 hidden animate-fadeIn peer-checked/tab1:animate-fadeOut peer-checked/tab1:block">
            </div>
            <div className="col-span-2 hidden animate-fadeIn peer-checked/tab2:animate-fadeOut peer-checked/tab2:block">
                <War avatar={avatar} onClick={onClick} />
            </div>
        </div>
    )
}
