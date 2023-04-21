import cx from 'classnames'

import './styles/index.scss'

import { Providers } from 'app/providers'
import { Routing } from 'features/routing'
import { useTheme } from 'features/theme-provider'
import { PublicLayout } from 'widgets/public-layout'

import 'shared/config/i18n-next'

import { publicRoutes } from './config'

export const App = () => {
    const { theme } = useTheme()

    return (
        <Providers>
            <div className={cx('app', theme)}>
                <PublicLayout>
                    <Routing routes={publicRoutes} />
                </PublicLayout>
            </div>
        </Providers>
    )
}
