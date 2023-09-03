import { FC, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import cx from "classnames"

interface SelectProps {
    selected: any
    setSelected: any
    options: any[]
}

export const Select: FC<SelectProps> = ({ options, selected, setSelected }) => (
    <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
                <Listbox.Button className={cx(
                    "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md",
                    "focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white",
                    "focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
                )}>
                    {selected.name}
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className={cx(
                        "absolute mt-1 max-h-96 w-full overflow-auto rounded-md py-1",
                        "bg-[var(--background-color)]",
                        "text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                    )}>
                        {options.map((person, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                value={person}
                                className={({ active }) => cx(
                                    "relative cursor-default select-none py-2 pl-10 pr-4",
                                    active ? "bg-amber-100 text-amber-900" : "text-[var(--text-color)]",
                                )}
                            >
                                {({ selected }) => (
                                    <>
                                        <div className={cx(
                                            "block truncate",
                                            selected ? "font-medium" : "font-normal",
                                        )}>
                                            {person.name}
                                        </div>
                                        {selected && (
                                            <div className={cx(
                                                "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
                                            )}>
                                                --&gt;
                                            </div>
                                        )}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    </div>
)
