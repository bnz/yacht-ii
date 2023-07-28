import type { FC, PropsWithChildren } from "react"

export const DicesWrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="flex flex-nowrap justify-center overflow-hidden mt-2 mb-4 text-4xl pb-3">
        {children}
    </div>
)

// TODO
// fontSize: spacing(diceSize),
// paddingBottom: spacing(diceSize / 3),

