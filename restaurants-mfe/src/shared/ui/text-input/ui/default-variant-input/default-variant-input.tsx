import { type FC } from 'react'

import styles from './default-varinat-input.module.scss'

import { type ITextInputVariantProps } from '../../types'

export const DefaultVariantInput: FC<ITextInputVariantProps> = (props) => {
    const { readonly, label, ...otherProps } = props

    if (!label) {
        return <input
            className={styles.input}
            disabled={readonly}
            {...otherProps}
        />
    }

    return (
        <label className={styles.label}>
            <span>{label}</span>
            <input
                className={styles.input}
                disabled={readonly}
                {...otherProps}
            />
        </label>
    )
}
