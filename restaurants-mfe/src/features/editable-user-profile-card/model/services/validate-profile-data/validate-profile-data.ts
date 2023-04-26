import { type IProfile } from 'entities/profile'
import { validate, type IValidators, PhoneValidator, EmailValidator } from 'shared/lib/validators'

export const validateProfileData = (profileData: IProfile) => {
    const validators: IValidators<IProfile> = [new PhoneValidator(), new EmailValidator()]

    return validate({ validators, value: profileData })
}
