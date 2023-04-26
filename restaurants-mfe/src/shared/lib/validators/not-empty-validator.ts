import { type VALIDATION_ERROR } from 'shared/const'
import { type Validator } from './types'

export class NotEmptyValidator<Type> implements Validator<Type> {
    private readonly err: VALIDATION_ERROR
    private readonly key: keyof Type

    constructor (key: keyof Type, err: VALIDATION_ERROR) {
        this.err = err
        this.key = key
    }

    validate (data: Type): VALIDATION_ERROR[] {
        if (!data[this.key]) {
            return [this.err]
        }

        return []
    }
}
