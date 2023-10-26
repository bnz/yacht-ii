import { i18n } from "../../helpers/i18n/i18n"
import { i18nKeys } from '../../helpers/i18n/i18nKeys';

export function Table({ rows }: { rows: (string | number)[] }) {
    return (
        <table>
            <tbody>
            {rows.map(function (i) {
                const [title, title2] = i18n(`combination.${i}.title` as i18nKeys).split("###")

                return (
                    <tr key={i}>
                        <td>{i18n(`combination.${i}` as i18nKeys)}</td>
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
}
