import { memo, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './title.module.scss'

import { TITLE_SIZE } from '../const'

interface Props {
    children: ReactNode
    size?: TITLE_SIZE
}

export const Title = memo((props: Props) => {
    const { children, size = TITLE_SIZE.MD } = props
    return (
        <p className={classNames(styles.title, styles[size])}>
            {children}
        </p>
    )
})
