import { type IAggregatorRestaurantPreview } from 'kisszaya-table-reservation/lib/interfaces'

import { Badge, BADGE_SIZE, BADGE_VARIANT, Card, Text, Title, useModal } from 'shared/ui'
import { RestaurantModal } from 'entities/restaurants/ui'

import { Group } from 'shared/ui/group/group'
import styles from './restaurant-preview-card.module.scss'

type Props = IAggregatorRestaurantPreview

export const RestaurantPreviewCard = (props: Props) => {
    const { opened, photo, restaurant_id, city, name, tags, address } = props
    const { open } = useModal()

    if (!restaurant_id) {
        return null
    }

    return (
        <Card
            withBorder
            withShadow
            onClick={() => { open(<RestaurantModal restaurant_id={restaurant_id}/>) }}
        >
            <Group gap={24} noWrap>
                <img className={styles.img}
                    src="https://media-cdn.tripadvisor.com/media/photo-s/16/70/5b/e3/city.jpg"
                    alt="Restaurant image"
                />
                <div className={styles.info}>
                    <div className={styles.left}>
                        <Title>{name}</Title>
                        <div className={styles.fields}>
                            <Text>{address}</Text>
                            <Text>{city}</Text>
                            <Text>{JSON.stringify(tags)}</Text>
                        </div>
                    </div>
                    <Badge variant={BADGE_VARIANT.FILLED} size={BADGE_SIZE.SM}>
                        opened
                    </Badge>
                </div>
            </Group>
        </Card>
    )
}
