import { type VALIDATION_ERROR } from 'shared/const'

export interface Validator<Type> {
    validate: (value: Type) => VALIDATION_ERROR[]
}

export type IValidators<Type> = Array<Validator<Type>>
