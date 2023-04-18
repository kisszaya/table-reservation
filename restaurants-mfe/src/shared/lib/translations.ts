import { useTranslation } from 'react-i18next'

export const useRestaurantsTranslation = () => {
    const { t, i18n } = useTranslation('restaurants')

    return { t, i18n }
}

export const useReservesTranslation = () => {
    const { t, i18n } = useTranslation('reserves')

    return { t, i18n }
}

export const useDefaultTranslation = () => {
    const { t, i18n } = useTranslation()

    return { t, i18n }
}
