import React, { FC, PropsWithChildren } from 'react'
import { i18n } from "../helpers/i18n/i18n"
import cx from "classnames"

export const Heading: FC<PropsWithChildren<{className?: string}>> = ({ children, className }) => (
    <h3 className={cx("font-bold mt-2 mb-5", className)}>
        {children}
    </h3>
)

export const P: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
    <p className={cx("mb-3 font-thin", className)}>
        {children}
    </p>
)

export const Rules: FC = () => (
    <>
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

        <P>{i18n('help.topSection.tip')}</P>
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
