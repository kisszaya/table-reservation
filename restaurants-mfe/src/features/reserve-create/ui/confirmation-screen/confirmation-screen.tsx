import { Text, Title, TITLE_SIZE } from 'shared/ui'

import styles from './confirmation-screen.module.scss'

import { useReserveConfirmationData } from './use-reserve-confirmation-data'
import { ModalControlButtons } from '..'

interface Props {
    onPrevious: () => void
}
export const ConfirmationScreen = (props: Props) => {
    const { rightData, leftData } = useReserveConfirmationData()
    const { onPrevious } = props

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title size={TITLE_SIZE.XS}>
                    Подтверждение брони
                </Title>
                <div className={styles.card}>
                    <div className={styles.left}>
                        {
                            leftData.map(text => (
                                <Title key={text}>
                                    {text}
                                </Title>
                            ))
                        }

                    </div>
                    <div className={styles.right}>
                        {
                            rightData.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className={styles.infoItem}
                                >
                                    <Title
                                        size={TITLE_SIZE.XS}
                                        className={styles.infoTitle}
                                    >
                                        {label}
                                    </Title>
                                    <Text>
                                        {value}
                                    </Text>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <ModalControlButtons disabled={false} onPrevious={onPrevious}/>
        </div>
    )
}
