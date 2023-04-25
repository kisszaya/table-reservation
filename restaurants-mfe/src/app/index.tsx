import cx from 'classnames'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles/index.scss'

import { withProviders } from 'app/providers'
import { useTheme } from 'features/theme-provider'
import { PublicLayout } from 'widgets/public-layout'
import { selectUserAuthData, userActions } from 'entities/user'
import { PrivateLayout } from 'widgets/private-layout'
import { Routing, publicRoutes, privateRoutes } from './providers/routing'

import 'shared/config/i18n-next/i18n-next'

const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const userAuthData = useSelector(selectUserAuthData)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [])

    return (
        <div className={cx('app', theme)}>
            {
                userAuthData
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
}

const Container = () => {
    return <App/>
}

export default withProviders(Container)
