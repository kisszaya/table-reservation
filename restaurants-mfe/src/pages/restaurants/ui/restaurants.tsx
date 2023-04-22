import { Counter } from 'entities/counter'
import { useRestaurantsTranslation } from 'shared/lib'

const Restaurants = () => {
    const { t } = useRestaurantsTranslation()

    return (
        <div>{t('restaurants')}
            <Counter/>
        </div>
    )
}

export default Restaurants
