import { Title, TITLE_SIZE } from 'shared/ui'

import styles from './time-screen.module.scss'

import { ModalControlButtons, SelectDay, SelectTime } from '..'

interface Props {
    onNext: () => void
}

export const TimeScreen = (props: Props) => {
    const { onNext } = props

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
                <ModalControlButtons onNext={onNext} disabled={false}/>
            </div>
        </div>
    )
}
