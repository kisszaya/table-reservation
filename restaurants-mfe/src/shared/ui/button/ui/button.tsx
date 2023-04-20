import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

import { BUTTON_VARIANT } from '../const'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANT
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
    const {
        children,
        className,
        variant = BUTTON_VARIANT.DEFAULT,
        ...otherProps
    } = props

    return (
        <button
            className={cx(styles.button, styles[variant], className)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
