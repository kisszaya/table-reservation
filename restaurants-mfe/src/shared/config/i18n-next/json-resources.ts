import translationEn from '../../../../public/locales/en/translation.json'
import reservesEn from '../../../../public/locales/en/reserves.json'
import reservesForbiddenEn from '../../../../public/locales/en/reserves-forbidden.json'
import restaurantsEn from '../../../../public/locales/en/restaurants.json'
import errorsEn from '../../../../public/locales/en/errors.json'

import translationRu from '../../../../public/locales/ru/translation.json'
import reservesRu from '../../../../public/locales/ru/reserves.json'
import reservesForbiddenRu from '../../../../public/locales/ru/reserves-forbidden.json'
import restaurantsRu from '../../../../public/locales/ru/restaurants.json'
import errorsRu from '../../../../public/locales/ru/errors.json'

export const jsonTranslationResources = {
    en: {
        translation: translationEn,
        reserves: reservesEn,
        restaurants: restaurantsEn,
        reservesForbidden: reservesForbiddenEn,
        errors: errorsEn
    },
    ru: {
        translation: translationRu,
        reserves: reservesRu,
        restaurants: restaurantsRu,
        reservesForbidden: reservesForbiddenRu,
        errors: errorsRu
    }
}
