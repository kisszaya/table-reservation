import {
    type IVisitorReservePreview,
    RESERVE_STATUS
} from 'kisszaya-table-reservation/lib/interfaces'

import { Badge, BADGE_SIZE, Button, BUTTON_SIZE, Card } from 'shared/ui'

import { TableSchema } from 'widgets/table-schema'
import { InfoField } from 'widgets/info-field'

import styles from './styles.module.scss'
import { useData } from './use-data'

import { reserveStatusNames } from '../../const'

type Props = IVisitorReservePreview

const unit = 30

export const ReserveCard = (props: Props) => {
    const { table, status } = props
    const { onCancelReserve, tableInfo, restaurantInfo } = useData(props)

    return (
        <Card withBorder withShadow>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        <TableSchema
                            table={{
                                variant: table.variant,
                                seats: table.seats,
                                height: table.height,
                                width: table.width
                            }}
                            heightUnit={unit}
                            widthUnit={unit}
                        />
                        <div className={styles.tableInfo}>
                            {
                                tableInfo.map(info => (
                                    <InfoField {...info} key={info.label}/>
                                ))
                            }
                        </div>
                    </div>
                    {status === RESERVE_STATUS.CREATED && <div className={styles.bottom}>
                        <Button size={BUTTON_SIZE.XS} onClick={onCancelReserve}>
                            Отменить бронь
                        </Button>
                    </div>}
                </div>
                <div className={styles.right}>
                    {
                        restaurantInfo.map(info => (
                            <InfoField {...info} key={info.label}/>
                        ))
                    }
                    <Badge className={styles.status} size={BADGE_SIZE.SM}>
                        {reserveStatusNames[status]}
                    </Badge>
                </div>
            </div>
        </Card>
    )
}
