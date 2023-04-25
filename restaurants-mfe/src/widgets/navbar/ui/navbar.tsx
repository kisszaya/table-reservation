import { memo } from 'react'

import { ThemeSwitcher } from 'widgets/theme-switcher'
import { LanguageSwitcher } from 'widgets/language-switcher'
import { Button, Link } from 'shared/ui'

import styles from './navbar.module.scss'
import { type INavbarButton, type INavbarLinks } from '../types'

interface Props {
    links: INavbarLinks
    button: INavbarButton
}

export const Navbar = memo((props: Props) => {
    const { links, button } = props

    return (
        <div className={styles.navbar}>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>

            <div className={styles.links}>
                {links.map(({ title, route }) => (
                    <Link to={route} key={title}>
                        {title}
                    </Link>
                ))}
            </div>

            <Button onClick={button.onClick}>
                {button.title}
            </Button>
        </div>
    )
})
