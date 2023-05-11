import { useSelector } from 'react-redux'
import { Title, TITLE_SIZE } from 'shared/ui'

import styles from './time-screen.module.scss'

import { selectCreateReserveTableId } from '../../model'

import { ModalControlButtons, SelectDay, SelectTables, SelectTime } from '..'

interface Props {
    onNext: () => void
}

export const TimeScreen = (props: Props) => {
    const table_id = useSelector(selectCreateReserveTableId)
    const { onNext } = props

    const disabled = !table_id

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Title size={TITLE_SIZE.XS}>
                    Бронь места
                </Title>
                <SelectDay/>
                <SelectTime/>
            </div>
            <div className={styles.right}>
                <SelectTables/>
                <ModalControlButtons onNext={onNext} disabled={disabled}/>
            </div>
        </div>
    )
}
