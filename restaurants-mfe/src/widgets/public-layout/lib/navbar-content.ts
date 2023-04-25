import { type INavbarLinks } from 'widgets/navbar'
import { PUBLIC_PATH, i18n } from 'shared/config'

const publicNavbarLinks: INavbarLinks = []
Object.entries(PUBLIC_PATH).forEach(([key, route]) => {
    publicNavbarLinks.push({
        title: i18n.t(`navbar.${key}`),
        route
    })
})

export { publicNavbarLinks }
