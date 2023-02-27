
export function resolveValueInObj(path: string, obj: any, separator = ".") {
    const properties = Array.isArray(path) ? path : path.split(separator);
    // @ts-ignore
    return properties.reduce((prev, curr) => prev?.[curr], obj);
}