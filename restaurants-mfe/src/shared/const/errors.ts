import { i18n } from 'shared/config'

export enum VALIDATION_ERROR {
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_PHONE = 'INCORRECT_PHONE',
    EMPTY_PHONE = 'EMPTY_PHONE',
    EMPTY_EMAIL = 'EMPTY_EMAIL',
    INCORRECT_EMAIL = 'INCORRECT_PHONE'
}

const opt = { ns: 'errors' }

export const validationErrorTexts: Record<VALIDATION_ERROR, string> = {
    [VALIDATION_ERROR.SERVER_ERROR]: i18n.t('validationErrors.serverError', opt),
    [VALIDATION_ERROR.INCORRECT_PHONE]: i18n.t('validationErrors.incorrectPhone', opt),
    [VALIDATION_ERROR.EMPTY_PHONE]: i18n.t('validationErrors.emptyPhone', opt),
    [VALIDATION_ERROR.EMPTY_EMAIL]: i18n.t('validationErrors.emptyEmail', opt),
    [VALIDATION_ERROR.INCORRECT_EMAIL]: i18n.t('validationErrors.incorrectEmail', opt)
}
