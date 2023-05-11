const TAGS = '/tags'
const AGGREGATOR_RESTAURANTS = '/aggregator-restaurants'
const RESTAURANTS = '/restaurants'
const TABLES = '/tables'
const RESERVES = '/reserves'
const USERS = '/users'
const AUTH = '/auth'

export const serverRoutes = {

    // auth
    refresh: AUTH + '/refresh',
    logout: AUTH + '/logout',
    login: AUTH + '/visitor-login',

    // tags
    tags: TAGS,

    // restaurants
    restaurants: AGGREGATOR_RESTAURANTS,
    restaurant: (restaurants_id: number | string) => AGGREGATOR_RESTAURANTS + `/${restaurants_id}`,

    // tables
    freeTables: ({ day, time, month, restaurant_id }: IFreeTablesProps) =>
        RESTAURANTS + `/${restaurant_id}` + TABLES + `/free?day=${day}&time=${time}&month=${month}`,

    // reserves
    restaurantReserves: (restaurant_id: number | string) =>
        RESERVES + RESTAURANTS + `/${restaurant_id}`,
    reserve: (reserve_id: number | string) => RESERVES + `/${reserve_id}`,
    reserves: RESERVES,

    // users
    me: USERS + '/me'

}

interface IFreeTablesProps {
    restaurant_id: number | string
    day: number
    month: number
    time: number
}
