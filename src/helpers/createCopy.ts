export function createCopy<T>(obj: T) {
    return JSON.parse(JSON.stringify(obj)) as T
}
