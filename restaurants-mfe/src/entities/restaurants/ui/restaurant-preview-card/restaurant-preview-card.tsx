import { type IAggregatorRestaurantPreview } from 'kisszaya-table-reservation/lib/interfaces'

import { Title, Text, useModal } from 'shared/ui'
import { RestaurantModal } from 'entities/restaurants/ui'

import styles from './restaurant-preview-card.module.scss'

type Props = IAggregatorRestaurantPreview

export const RestaurantPreviewCard = (props: Props) => {
    const { opened, photo, restaurant_id, city, name, tags, address } = props
    const { open } = useModal()

    if (!restaurant_id) {
        return null
    }

    return (
        <div
            className={styles.container}
            onClick={() => { open(<RestaurantModal restaurant_id={restaurant_id}/>) }}
        >
            <img className={styles.img}
                src="https://media-cdn.tripadvisor.com/media/photo-s/16/70/5b/e3/city.jpg"
                alt="Restaurant image"
            />
            <div className={styles.info}>
                <Title>{name}</Title>
                <Text>{address}</Text>
                <Text>{city}</Text>
                <Text>{address}</Text>
                <Text>opened{opened}</Text>
            </div>
        </div>
    )
}
