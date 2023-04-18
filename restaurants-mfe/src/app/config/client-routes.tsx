import { type IRoutes } from 'features/routing'
import { PUBLIC_CLIENT_PATHS, PUBLIC_PATH } from 'shared/config'

import * as PAGES from 'pages'

export const publicRoutes: IRoutes<PUBLIC_CLIENT_PATHS> = {
    [PUBLIC_CLIENT_PATHS.RESTAURANTS]: {
        path: PUBLIC_PATH[PUBLIC_CLIENT_PATHS.RESTAURANTS],
        element: <PAGES.RestaurantsPage />,
        default: true
    },
    [PUBLIC_CLIENT_PATHS.RESERVES]: {
        path: PUBLIC_PATH[PUBLIC_CLIENT_PATHS.RESERVES],
        element: <PAGES.ReservesPage />
    }
}
