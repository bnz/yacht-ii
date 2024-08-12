import { winner } from "@store/winner"
import { endOfGameVisibility, updateEndOfGameVisibility } from "@store/endOfGameVisibility"
import { i18n } from "@helpers/i18n"

export function EndOfGamePlaceholder() {
    if (winner.value === null && endOfGameVisibility.value) {
        return null
    }

    return (
        <div className="absolute inset-0 bg-[--background-color] flex justify-center items-center">
            <button type="button" className="text-3xl !px-10 !py-3" onClick={function () {
                updateEndOfGameVisibility(true)
            }}>
                {i18n("button.showEndOfGame")}
            </button>
        </div>
    )
}
