import { type ButtonHTMLAttributes, memo, type PropsWithChildren } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

import { BUTTON_VARIANT, BUTTON_SIZE } from '../const'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANT
  size?: BUTTON_SIZE
}

export const Button = memo((props: PropsWithChildren<Props>) => {
    const {
        children,
        className,
        variant = BUTTON_VARIANT.DEFAULT,
        size = BUTTON_SIZE.MD,
        ...otherProps
    } = props

    return (
        <button
            className={cx(styles.button, styles[variant], styles[`size-${size}`], className)}
            {...otherProps}
        >
            {children}
        </button>
    )
})
