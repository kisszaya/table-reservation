import { memo, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './title.module.scss'

import { TITLE_SIZE } from '../const'

interface Props {
    children: ReactNode
    size?: TITLE_SIZE
    className?: string
}

export const Title = memo((props: Props) => {
    const {
        children,
        size = TITLE_SIZE.MD,
        className
    } = props

    const classes = classNames(
        styles.title,
        styles[size],
        className
    )

    return (
        <p className={classes}>
            {children}
        </p>
    )
})
