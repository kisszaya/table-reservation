import { memo, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './badge.module.scss'

import { BADGE_SIZE, BADGE_VARIANT } from '../const'

interface Props {
    children: ReactNode
    size?: BADGE_SIZE
    variant?: BADGE_VARIANT
    onClick?: () => void
    className?: string
}

export const Badge = memo((props: Props) => {
    const {
        children,
        size = BADGE_SIZE.MD,
        onClick,
        className,
        variant = BADGE_VARIANT.OUTLINED
    } = props

    const classes = classNames(
        styles.badge,
        styles[size],
        styles[variant],
        { [styles.clickable]: !!onClick },
        className
    )

    return <div className={classes} onClick={onClick}>
        {children}
    </div>
})
