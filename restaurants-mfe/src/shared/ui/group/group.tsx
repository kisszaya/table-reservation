import { type FC, type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './group.module.scss'

interface Props {
    children: ReactNode
    noWrap?: boolean
    justify?: 'start' | 'end' | 'space-around' | 'center' | 'space-between'
    className?: string
    align?: 'start' | 'center' | 'end'
    gap?: number
}

export const Group: FC<Props> = ({
    children,
    noWrap = false,
    justify = 'start',
    className,
    align = 'start',
    gap = 0,
    ...props
}) => {
    const flexWrap = noWrap ? 'nowrap' : 'wrap'

    const stylesParams = {
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`
    }

    return (
        <div
            className={classNames(styles.group, className)}
            style={{
                flexWrap,
                ...stylesParams
            }}
        >
            {children}
        </div>
    )
}
