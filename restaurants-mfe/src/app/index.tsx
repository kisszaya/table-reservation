import cx from 'classnames'

import './styles/index.scss'

import { Providers } from 'app/providers'
import { Routing } from 'features/routing'
import { useTheme } from 'features/theme-provider'
import { Navbar } from 'widgets/navbar'
import 'shared/config/i18n-next'

import { publicRoutes } from './config'

export const App = () => {
    const { theme } = useTheme()

    return (
        <Providers>
            <div className={cx('app', theme)}>
                <Navbar />
                <Routing routes={publicRoutes} />
            </div>
        </Providers>
    )
}
