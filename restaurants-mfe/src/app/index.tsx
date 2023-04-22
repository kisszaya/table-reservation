import cx from 'classnames'

import './styles/index.scss'

import { withProviders } from 'app/providers'
import { useTheme } from 'features/theme-provider'
import { PublicLayout } from 'widgets/public-layout'
import { Routing, publicRoutes } from './providers/routing'

import 'shared/config/i18n-next/i18n-next'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={cx('app', theme)}>
            <PublicLayout>
                <Routing routes={publicRoutes} />
            </PublicLayout>
        </div>
    )
}

const Container = () => {
    return <App/>
}

export default withProviders(Container)
