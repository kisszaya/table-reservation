import { memo } from 'react'

import { Badge, BADGE_SIZE, BADGE_VARIANT, Title, TITLE_SIZE } from 'shared/ui'
import styles from './filter-block.module.scss'

import { type IFilterValue } from '../../types'

export interface IFilterBlockProps {
    title: string
    values: IFilterValue[]
    selectedValue: string[]
    setValue: (value: string) => void
}

export const FilterBlock = memo((props: IFilterBlockProps) => {
    const { selectedValue, values, setValue, title } = props

    return (
        <div className={styles.container}>
            <Title size={TITLE_SIZE.XS}>{title}</Title>
            <div className={styles.values}>
                {
                    values.map(({ value, label }) => {
                        const variant: BADGE_VARIANT =
                            selectedValue.includes(value)
                                ? BADGE_VARIANT.FILLED
                                : BADGE_VARIANT.OUTLINED

                        return (
                            <Badge size={BADGE_SIZE.SM}
                                key={value}
                                onClick={() => { setValue(value) }}
                                variant={variant}
                            >
                                {label}
                            </Badge>
                        )
                    })
                }
            </div>
        </div>
    )
})
