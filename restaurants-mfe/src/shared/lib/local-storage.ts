export const getFromLocalStorage = <ReturnedType>(
    key: string,
    defaultValue?: ReturnedType
) => {
    return (
        (JSON.parse(localStorage.getItem(key)) as ReturnedType) || defaultValue
    )
}

export const setInLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
}
