import { memo, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './text.module.scss'

import { TEXT_SIZE } from '../const'

interface Props {
    children: ReactNode
    size?: TEXT_SIZE
    className?: string
}

export const Text = memo((props: Props) => {
    const {
        children,
        size = TEXT_SIZE.MD,
        className
    } = props

    const classes = classNames(
        styles.text,
        styles[size],
        className
    )

    return (
        <p
            className={classes}
        >
            {children}
        </p>
    )
})
