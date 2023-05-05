import { memo, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './text.module.scss'

import { TEXT_SIZE } from '../const'

interface Props {
    children: ReactNode
    size?: TEXT_SIZE
}

export const Text = memo((props: Props) => {
    const { children, size = TEXT_SIZE.MD } = props
    return (
        <p className={classNames(styles.text, styles[size])}>
            {children}
        </p>
    )
})
