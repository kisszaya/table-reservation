import { VALIDATION_ERROR } from 'shared/const'
import { type Validator } from './types'

const reg = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

export class EmailValidator<Type extends { email?: string }> implements Validator<Type> {
    validate (data: Type): VALIDATION_ERROR[] {
        if (!data?.email) {
            return [VALIDATION_ERROR.EMPTY_EMAIL]
        }

        if (!(new RegExp(reg)).test(data.email)) {
            return [VALIDATION_ERROR.INCORRECT_EMAIL]
        }

        return []
    }
}
