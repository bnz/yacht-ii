import type { FC } from "react"
import { i18n } from "../helpers/i18n/i18n"
import { Heading } from "./Rules"
import React from "react"

export const GameHeading: FC = () => (
    <Heading className="text-5xl md:text-7xl lg:text-9xl font-thin text-center mt-10">
        {i18n("yacht")}
    </Heading>
)
