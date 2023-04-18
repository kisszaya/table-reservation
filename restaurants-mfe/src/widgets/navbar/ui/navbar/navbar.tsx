import { type FC } from 'react'

import { ThemeSwitcher } from 'widgets/theme-switcher'
import { LanguageSwitcher } from 'widgets/language-switcher'
import { PUBLIC_PATH } from 'shared/config'
import { Link } from 'shared/ui'
import { useDefaultTranslation } from 'shared/lib'

import styles from './navbar.module.scss'

interface Props {}

export const Navbar: FC<Props> = (props) => {
    const { t } = useDefaultTranslation()

    return (
        <div className={styles.navbar}>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>

            <div className={styles.links}>
                {Object.entries(PUBLIC_PATH).map(([key, route]) => (
                    <Link to={route} key={key}>
                        {t(`navigation.${key}`)}
                    </Link>
                ))}
            </div>
        </div>
    )
}
