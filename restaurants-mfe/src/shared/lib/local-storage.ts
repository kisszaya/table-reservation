export const getFromLocalStorage = <ReturnedType>(
    key: string,
    defaultValue?: ReturnedType
) => {
    const res = localStorage.getItem(key)
    if (!res && !defaultValue) {
        return undefined
    }
    if (!res) {
        return defaultValue
    }

    return (
        JSON.parse(res) as ReturnedType
    )
}

export const setInLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const clearInLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}
