import type { FC } from "react"
import { i18n } from "../../helpers/i18n/i18n"

export const DicesActions: FC = () => {
    return (
        <div className="mb-6 justify-center flex gap-5">
            <button type="button">
                {i18n('button.dropDices')}
            </button>
            <button type="button">
                {i18n('button.reset')}
            </button>
        </div>
    )
}
