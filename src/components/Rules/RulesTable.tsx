import React, { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"

export const Table: FC<{ rows: (string | number)[] }> = ({ rows }) => (
    <table>
        <tbody>
        {rows.map((i) => {
            const [title, title2] = i18n(`combination.${i}.title`).split("###")
            return (
                <tr key={i}>
                    <td>{i18n(`combination.${i}`)}</td>
                    <td>
                        {title}
                        <div className="text-sm">{title2}</div>
                    </td>
                </tr>
            )
        })}
        </tbody>
    </table>
)
