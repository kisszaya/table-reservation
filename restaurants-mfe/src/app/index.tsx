import cx from 'classnames'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './styles/index.scss'

import { withProviders } from 'app/providers'
import { useTheme } from 'features/theme-provider'
import { PublicLayout } from 'widgets/public-layout'
import { initApp, selectMeData, selectMeIsLoading } from 'entities/me'
import { PrivateLayout } from 'widgets/private-layout'
import { useAppDispatch } from 'shared/lib/hooks'
import { PageLoader } from 'widgets/page-loader'
import { privateRoutes, publicRoutes, Routing } from './providers/routing'

import 'shared/config/i18n-next/i18n-next'

const App = memo(() => {
    const { theme } = useTheme()
    const userMeData = useSelector(selectMeData)
    const isLoading = useSelector(selectMeIsLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initApp())
    }, [])

    if (isLoading) {
        <div className={cx('app', theme)}>
            <PageLoader/>
        </div>
    }

    return (
        <div className={cx('app', theme)}>
            {
                userMeData
                    ? (
                        <PrivateLayout>
                            <Routing routes={privateRoutes} />
                        </PrivateLayout>
                    )
                    : (
                        <PublicLayout>
                            <Routing routes={publicRoutes} />
                        </PublicLayout>
                    )
            }
        </div>
    )
})

const Container = () => {
    return <App/>
}

export default withProviders(Container)
