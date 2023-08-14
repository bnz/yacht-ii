/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'

type KeyCodes =
    | 'AltLeft'
    | 'AltRight'
    | 'ArrowDown'
    | 'ArrowLeft'
    | 'ArrowRight'
    | 'ArrowUp'
    | 'Backquote'
    | 'Backslash'
    | 'Backspace'
    | 'BracketLeft'
    | 'BracketRight'
    | 'CapsLock'
    | 'Comma'
    | 'ControlLeft'
    | 'ControlRight'
    | 'Delete'
    | 'Digit0'
    | 'Digit1'
    | 'Digit2'
    | 'Digit3'
    | 'Digit4'
    | 'Digit5'
    | 'Digit6'
    | 'Digit7'
    | 'Digit8'
    | 'Digit9'
    | 'End'
    | 'Enter'
    | 'Equal'
    | 'Escape'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'F10'
    | 'F11'
    | 'F12'
    | 'F13'
    | 'F14'
    | 'F15'
    | 'F16'
    | 'F17'
    | 'F18'
    | 'F19'
    | 'F20'
    | 'F21'
    | 'F22'
    | 'F23'
    | 'F24'
    | 'Help'
    | 'Home'
    | 'Insert'
    | 'IntlBackslash'
    | 'KeyA'
    | 'KeyB'
    | 'KeyC'
    | 'KeyD'
    | 'KeyE'
    | 'KeyF'
    | 'KeyG'
    | 'KeyH'
    | 'KeyI'
    | 'KeyJ'
    | 'KeyK'
    | 'KeyL'
    | 'KeyM'
    | 'KeyN'
    | 'KeyO'
    | 'KeyP'
    | 'KeyQ'
    | 'KeyR'
    | 'KeyS'
    | 'KeyT'
    | 'KeyU'
    | 'KeyV'
    | 'KeyW'
    | 'KeyX'
    | 'KeyY'
    | 'KeyZ'
    | 'Minus'
    | 'NonConvert'
    | 'NumLock'
    | 'Numpad0'
    | 'Numpad1'
    | 'Numpad2'
    | 'Numpad3'
    | 'Numpad4'
    | 'Numpad5'
    | 'Numpad6'
    | 'Numpad7'
    | 'Numpad8'
    | 'Numpad9'
    | 'NumpadAdd'
    | 'NumpadComma'
    | 'NumpadDecimal'
    | 'NumpadDivide'
    | 'NumpadEnter'
    | 'NumpadMultiply'
    | 'NumpadSubtract'
    | 'PageDown'
    | 'PageUp'
    | 'Paste'
    | 'Pause'
    | 'Period'
    | 'PrintScreen'
    | 'Props'
    | 'Quote'
    | 'ScrollLock'
    | 'Select'
    | 'Semicolon'
    | 'ShiftLeft'
    | 'ShiftRight'
    | 'Slash'
    | 'Space'
    | 'Tab'

type Dictionary<K extends string, T> = { [P in K]?: T }

interface KeyboardActionsProps {
    actions: Dictionary<KeyCodes, () => void>
}

export const KeyboardActions: FC<KeyboardActionsProps> = ({ actions }) => {
    useEffect(() => {
        const fn = (e: KeyboardEvent): void => {
            if (typeof actions[e.code as KeyCodes] === "function") {
                // @ts-ignore
                actions[e.code as KeyCodes]()
            }
        }

        window.addEventListener('keyup', fn, true)

        return () => {
            window.removeEventListener('keyup', fn, true)
        }
    }, [])

    return null
}
