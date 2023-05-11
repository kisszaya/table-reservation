type Props<T> = {
    [key in keyof T]: T[key]
}

type Returned<T> = {
    [key in keyof T]: NonNullable<T[key]>
}

export const isAllFieldsNonNullable = <T>(
    fields: Props<T>
): Returned<T> => {
    const res: Returned<T> = {} as Returned<T>

    for (const field of Object.entries(fields)) {
        if (!field[1]) {
            throw new Error()
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        res[field[0]] = field[1]
    }

    return res
}
