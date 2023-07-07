import React, { FC, PropsWithChildren } from 'react'
import { i18n } from "../helpers/i18n/i18n"

const Heading: FC<PropsWithChildren<{}>> = ({ children }) => <h3>{children}</h3>

const P: FC<PropsWithChildren<{}>> = ({ children }) => <p>{children}</p>

export const Rules: FC = () => (
    <>
        <P>{i18n('help.intro')}</P>
        <Heading>{i18n('help.gameplay.header')}</Heading>
        <P>{i18n('help.gameplay.text')}</P>
        <Heading>{i18n('help.scoring.header')}</Heading>
        <P>{i18n('help.scoring.text')}</P>
        <P>{i18n('help.topSection')}</P>
        {/*
        <Table size="small">
            <TableBody>
                <TableRow>
                    <TableCell>{i18n('combination.1')}</TableCell>
                    <TableCell>{i18n('combination.1.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{i18n('combination.2')}</TableCell>
                    <TableCell>{i18n('combination.2.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{i18n('combination.3')}</TableCell>
                    <TableCell>{i18n('combination.3.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{i18n('combination.4')}</TableCell>
                    <TableCell>{i18n('combination.4.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{i18n('combination.5')}</TableCell>
                    <TableCell>{i18n('combination.5.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{i18n('combination.6')}</TableCell>
                    <TableCell>{i18n('combination.6.title')}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        */}

        <br />
        <P>{i18n('help.topSection.tip')}</P>
        <br />
        <P>{i18n('help.bottomSection')}</P>
        {/*
        <Table size="small">
            <TableBody>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.threeOfAKind')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.threeOfAKind.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.equal_4')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.equal_4.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.smallStraight')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.smallStraight.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.bigStraight')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.bigStraight.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.fullHouse')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.fullHouse.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.theYacht')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.theYacht.title')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCellNoWrap>{i18n('combination.chance')}</TableCellNoWrap>
                    <TableCell>{i18n('combination.chance.title')}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        */}
    </>
)
