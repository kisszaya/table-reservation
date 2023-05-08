import { type FC, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './stack.module.scss'

interface Props {
    children: ReactNode
    align?: 'end' | 'start' | 'center' | 'stretch'
    className?: string
    justify?: 'start' | 'end' | 'space-around' | 'center' | 'space-between'
}

export const Stack: FC<Props> = ({
    children,
    align = 'stretch',
    className,
    justify,
    ...props
}) => {
    const stylesParams = {
        justifyContent: justify,
        alignItems: align
    }

    return (
        <div
            className={classNames(styles.stack, className)}
            style={stylesParams}
        >
            {children}
        </div>
    )
}
