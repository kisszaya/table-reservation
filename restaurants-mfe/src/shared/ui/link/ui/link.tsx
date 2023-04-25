import { NavLink, type NavLinkProps } from 'react-router-dom'
import { memo, type PropsWithChildren } from 'react'
import cx from 'classnames'

import styles from './link.module.scss'

import { LINK_VARIANT } from '../const'

interface Props extends NavLinkProps {
  variant?: LINK_VARIANT
}

export const Link = memo((props: PropsWithChildren<Props>) => {
    const { children, variant = LINK_VARIANT.DEFAULT, ...otherProps } = props

    return (
        <NavLink className={cx(styles[variant])} {...otherProps}>
            {children}
        </NavLink>
    )
})
