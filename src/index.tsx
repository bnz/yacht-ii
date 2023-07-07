import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import "./input.css"
import { App } from "./App"
import { RecoilRoot } from "recoil"

createRoot(
    document.getElementById('root') as HTMLElement,
).render(
    <StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
