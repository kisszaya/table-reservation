import type { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import styles from './container.module.scss'

interface Props {
  className?: string
}

export const Container: FC<PropsWithChildren<Props>> = ({
    children,
    className
}) => {
    return (
        <div className={classNames(styles.container, className)}>{children}</div>
    )
}
