import React, { FC } from 'react'
import { i18n } from "../../helpers/i18n/i18n"
import { Table } from "./RulesTable"
import { Heading } from "./Heading"
import { P } from "./P"

export const Rules: FC = () => (
    <div className="mx-auto px-5 mb-14">
        <Heading>{i18n('help.gameplay.header')}</Heading>
        <P>{i18n('help.gameplay.text')}</P>
        <Heading>{i18n('help.scoring.header')}</Heading>
        <P>{i18n('help.scoring.text')}</P>
        <P underline>{i18n('help.topSection')}</P>
        <Table rows={[1, 2, 3, 4, 5, 6]} />
        <P className="md:w-2/3 md:mt-5 md:mb-10">{i18n('help.topSection.tip')}</P>
        <P underline>{i18n('help.bottomSection')}</P>
        <Table rows={["threeOfAKind", "equal_4", "smallStraight", "bigStraight", "fullHouse", "theYacht", "chance"]} />
    </div>
)
