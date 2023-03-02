export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`;
}[keyof ObjectType & (string | number)];

export type IEnvDefaultValues<ObjectType extends object> = {
    [Key in keyof ObjectType]+?: ObjectType[Key] extends object
        ? IEnvDefaultValues<ObjectType[Key]>
        : ObjectType[Key];
};