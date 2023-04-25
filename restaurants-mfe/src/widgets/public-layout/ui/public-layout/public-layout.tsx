import { type FC, type PropsWithChildren, useMemo } from 'react'

import { useLoginByPhoneModal } from 'features/auth-by-phone'
import { useDefaultTranslation } from 'shared/lib'
import { type INavbarButton, Navbar } from 'widgets/navbar'

import styles from './public-layout.module.scss'

import { publicNavbarLinks } from '../../lib'

export const PublicLayout: FC<PropsWithChildren> = (props) => {
    const { children } = props
    const { open } = useLoginByPhoneModal()
    const { t } = useDefaultTranslation()

    const navbarButton: INavbarButton = useMemo(() => ({
        title: t('auth.loginBtn'),
        onClick: open
    }), [open, t])

    return <div className={styles.container}>
        <Navbar links={publicNavbarLinks} button={navbarButton}/>
        {children}
    </div>
}
