type Value = string | number

export function inArray(arr: Array<Value>, value: Value): boolean {
    return arr.indexOf(value) !== -1;
}
