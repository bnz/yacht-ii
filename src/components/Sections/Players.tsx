import { i18n } from "@helpers/i18n"
import { PlayersList } from "../Players/PlayersList"
import { AddPlayer } from "../Players/AddPlayer"
import { StartGameButton } from "../StartGameButton"
import { CancelButton } from "../Players/CancelButton"
import { GameHeading } from "../GameHeading"
import { Footer } from "../Footer"
import { useSignals } from "@preact/signals-react/runtime"

export default function Players() {
    useSignals()
    
    return (
        <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
            <GameHeading />
            <h3 className="text-center mb-5 font-bold py-7 relative">
                <CancelButton />
                {i18n("playersHeader")}
                <AddPlayer />
            </h3>
            <PlayersList />
            <StartGameButton />
            <Footer />
        </div>
    )
}
