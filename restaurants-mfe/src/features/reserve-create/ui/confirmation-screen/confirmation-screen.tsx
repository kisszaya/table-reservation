import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button, Loader, Title, TITLE_SIZE, useModal } from 'shared/ui'
import { TableSchema } from 'widgets/table-schema'
import { useAppDispatch } from 'shared/lib/hooks'
import { PRIVATE_CLIENT_PATHS, PRIVATE_PATH } from 'shared/config'

import { InfoField } from 'widgets/info-field'
import styles from './confirmation-screen.module.scss'

import { useReserveConfirmationData } from './use-reserve-confirmation-data'
import { createReserve, selectCreateReserveIsLoading } from '../../model'
import { useSelectedTable } from '../../lib'
import { ModalControlButtons } from '..'

interface Props {
    onPrevious: () => void
}
export const ConfirmationScreen = (props: Props) => {
    const navigate = useNavigate()
    const { close } = useModal()
    const dispatch = useAppDispatch()

    const { rightData, leftData } = useReserveConfirmationData()
    const isLoading = useSelector(selectCreateReserveIsLoading)
    const { onPrevious } = props

    const { table } = useSelectedTable()

    const onSubmit = async () => {
        const res = await dispatch(createReserve())
        if (res.meta.requestStatus === 'fulfilled') {
            close()
            navigate(PRIVATE_PATH[PRIVATE_CLIENT_PATHS.RESERVES])
        }
    }

    if (isLoading) {
        return <Loader/>
    }

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
                        <div className={styles.table}>
                            <TableSchema
                                heightUnit={30}
                                widthUnit={30}
                                table={{
                                    variant: table.variant,
                                    width: table.width,
                                    height: table.height,
                                    seats: table.seats
                                }}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        {
                            rightData.map((item) => (
                                <InfoField {...item} key={item.label}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <ModalControlButtons disabled={false} onPrevious={onPrevious}/>
                <Button onClick={onSubmit}>
                    Зарезервировать
                </Button>
            </div>
        </div>
    )
}
