const TAGS = '/tags'
const RESTAURANTS = '/aggregator-restaurants'

export const serverRoutes = {

    // tags
    tags: TAGS,

    // restaurants
    restaurants: RESTAURANTS,
    restaurant: (restaurants_id: number | string) => RESTAURANTS + `/${restaurants_id}`

}
