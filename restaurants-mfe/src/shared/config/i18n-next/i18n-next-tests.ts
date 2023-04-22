import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { jsonTranslationResources } from './json-resources'

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        resources: jsonTranslationResources,

        interpolation: {
            escapeValue: false // not needed for react!!
        }
    })

export default i18n
