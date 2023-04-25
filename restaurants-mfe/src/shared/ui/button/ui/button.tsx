import { type ButtonHTMLAttributes, memo, type PropsWithChildren } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

import { BUTTON_VARIANT } from '../const'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANT
}

export const Button = memo((props: PropsWithChildren<Props>) => {
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
})
