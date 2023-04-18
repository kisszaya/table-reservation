import { useRestaurantsTranslation } from 'shared/lib'

const Restaurants = () => {
    const { t } = useRestaurantsTranslation()

    return <div>{t('restaurants')}</div>
}

export default Restaurants
