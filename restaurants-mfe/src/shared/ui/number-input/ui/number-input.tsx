import { type ChangeEvent, type HTMLAttributes, memo } from 'react'

import styles from './number-input.module.scss'

import { type NUMBER_INPUT_VARIANT } from '../const'

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    label?: string
    onChange: (value: number) => void
    value: number
    variant?: NUMBER_INPUT_VARIANT
    min?: number
    max?: number
}

export const NumberInput = memo((props: Props) => {
    const {
        label,
        value,
        onChange,
        ...otherProps
    } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.currentTarget.value))
    }

    if (!label) {
        return <input
            className={styles.input}
            type="number"
            onChange={handleChange}
            value={value}
            {...otherProps}
        />
    }

    return (
        <label className={styles.label}>
            <span>{label}</span>
            <input
                className={styles.input}
                type="number"
                onChange={handleChange}
                value={value}
                {...otherProps}
            />
        </label>
    )
})
