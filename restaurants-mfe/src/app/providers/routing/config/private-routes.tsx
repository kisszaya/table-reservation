import { PRIVATE_CLIENT_PATHS, PRIVATE_PATH } from 'shared/config'
import * as PAGES from 'pages'

import { type IRoutes } from '../types'

export const privateRoutes: IRoutes<PRIVATE_CLIENT_PATHS> = {
    [PRIVATE_CLIENT_PATHS.RESTAURANTS]: {
        path: PRIVATE_PATH[PRIVATE_CLIENT_PATHS.RESTAURANTS],
        element: <PAGES.RestaurantsPage />,
        default: true
    },
    [PRIVATE_CLIENT_PATHS.RESERVES]: {
        path: PRIVATE_PATH[PRIVATE_CLIENT_PATHS.RESERVES],
        element: <PAGES.ReservesPage />
    }
}
