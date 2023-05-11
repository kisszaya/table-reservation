import { Text, Title, TITLE_SIZE } from 'shared/ui'

import styles from './info-field.module.scss'

import { type IInfoField } from '../types'

export const InfoField = (props: IInfoField) => {
    const { value, label } = props

    return (
        <div
            className={styles.container}
        >
            <Title
                size={TITLE_SIZE.XS}
                className={styles.title}
            >
                {label}
            </Title>
            <Text>
                {value}
            </Text>
        </div>
    )
}
