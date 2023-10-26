import { ReportHandler } from 'web-vitals'

export default function reportWebVitals(onPerfEntry?: ReportHandler) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(function ({ getCLS, getFID, getFCP, getLCP, getTTFB }) {
            getCLS(onPerfEntry)
            getFID(onPerfEntry)
            getFCP(onPerfEntry)
            getLCP(onPerfEntry)
            getTTFB(onPerfEntry)
        })
    }
}
