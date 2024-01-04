import { i18n } from '@helpers/i18n'
import { useSetRecoilState } from 'recoil'
import { restartGame } from '../../recoil/atoms'
import { useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop } from '../Backdrop'
import { useStateToggle } from '../../helpers/useStateToggle'
import { KeyboardActions } from '../../helpers/KeyboardActions'
import { update } from "@signals/drawer"

function useRestart() {
    const restart = useSetRecoilState(restartGame)

    return useCallback(function () {
        restart(true)
        update(false)
    }, [restart])
}

export function RestartDialogAndButton() {
    const [open, toggle] = useStateToggle()
    const restart = useRestart()

    return (
        <>
            <button type="button" onClick={toggle}>
                {i18n('button.restartGame')}
            </button>
            {open && createPortal(
                <>
                    <KeyboardActions actions={{ Escape: toggle }} />
                    <Backdrop onClick={toggle} />
                    <div
                        className="bg-[--background-color] object-center z-10 p-5 rounded shadow-2xl flex gap-5 whitespace-nowrap"
                    >
                        <button type="button" onClick={toggle}>
                            {i18n("button.cancel")}
                        </button>
                        <button type="button" onClick={function () {
                            toggle()
                            restart()
                        }}>
                            {i18n("button.restartGame")}
                        </button>
                    </div>
                </>,
                document.body,
            )}
        </>
    )
}
