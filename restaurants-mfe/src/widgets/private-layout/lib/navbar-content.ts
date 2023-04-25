import { type INavbarLinks } from 'widgets/navbar'
import { i18n, PRIVATE_PATH } from 'shared/config'

const privateNavbarLinks: INavbarLinks = []
Object.entries(PRIVATE_PATH).forEach(([key, route]) => {
    privateNavbarLinks.push({
        title: i18n.t(`navigation.${key}`),
        route
    })
})

export { privateNavbarLinks }
