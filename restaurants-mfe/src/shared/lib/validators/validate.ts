import { type VALIDATION_ERROR } from 'shared/const'
import { type IValidators } from './types'

interface Props<T> {
    validators: IValidators<T>
    value: T
}

export const validate = <T>({ validators, value }: Props<T>): VALIDATION_ERROR[] | null => {
    const errors = validators.flatMap((v) => v.validate(value))
    if (errors.length === 0) return null

    return errors
}
