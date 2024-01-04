export function restoreState<T>(key: string, defaultValue: T): T {
    try {
        const data = localStorage.getItem(key)

        if (data !== null) {
            return JSON.parse(data) as T
        }
    } catch (e) {
        console.log(e)
        return defaultValue
    }
    return defaultValue
}

export function saveState<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error(e)
    }
}
