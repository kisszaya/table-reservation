import { type FC, type PropsWithChildren, useCallback, useMemo } from 'react'

import { userActions } from 'entities/user'
import { useDefaultTranslation } from 'shared/lib'
import { type INavbarButton, Navbar } from 'widgets/navbar'
import { useAppDispatch } from 'shared/lib/hooks'
import { Container } from 'shared/ui'

import styles from './private-layout.module.scss'

import { privateNavbarLinks } from '../../lib'

export const PrivateLayout: FC<PropsWithChildren> = (props) => {
    const { t } = useDefaultTranslation()
    const dispatch = useAppDispatch()
    const { children } = props

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const navbarButton: INavbarButton = useMemo(() => ({
        title: t('auth.logoutBtn'),
        onClick: onLogout
    }), [onLogout, t])

    return <div className={styles.container}>
        <Navbar links={privateNavbarLinks} button={navbarButton}/>
        <Container className={styles.container}>
            {children}
        </Container>
    </div>
}
