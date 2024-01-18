export type CommonBuilderType<Value, R> = {
    value: Value
} & R

export type Updater<T> = (value: T) => T
