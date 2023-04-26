import { VALIDATION_ERROR } from 'shared/const'
import { type Validator } from './types'

const reg = '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$'

export class PhoneValidator<Type extends { phone?: string }> implements Validator<Type> {
    validate (data: Type): VALIDATION_ERROR[] {
        if (!data?.phone) {
            return [VALIDATION_ERROR.EMPTY_PHONE]
        }

        if (!(new RegExp(reg)).test(data.phone)) {
            return [VALIDATION_ERROR.INCORRECT_PHONE]
        }

        return []
    }
}
