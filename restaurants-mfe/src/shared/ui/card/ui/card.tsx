import { type FC, type PropsWithChildren } from 'react'
import classNames from 'classnames'

import styles from './card.module.scss'

interface Props {
    onClick?: () => void
    className?: string
    withShadow?: boolean
    withBorder?: boolean
}

export const Card: FC<PropsWithChildren<Props>> = (props) => {
    const {
        children,
        className,
        onClick,
        withShadow = false,
        withBorder = false
    } = props

    const classes = classNames(
        styles.card,
        className,
        {
            [styles.border]: withBorder,
            [styles.shadow]: withShadow,
            [styles.clickable]: !!onClick
        }
    )

    return (
        <div
            onClick={onClick}
            className={classes}
        >
            {children}
        </div>
    )
}
