import { type ITablePreview } from 'kisszaya-table-reservation/lib/interfaces'

import classNames from 'classnames'

import { IconDate } from 'shared/assets'
import { TableSchema } from 'widgets/table-schema'
import { Text, TEXT_SIZE } from 'shared/ui'

import styles from './table-card.module.scss'

interface Props extends ITablePreview {
    onClick: () => void
    selected: boolean
}

export const TableCard = (props: Props) => {
    const { selected, onClick, persons_count, ...tableProps } = props

    const unit = tableProps.width > 2 ? 20 : 30

    return <div
        onClick={onClick}
        className={classNames(styles.card, { [styles.active]: selected })}
    >
        <div className={styles.top}>
            <div className={styles.left}>
                <TableSchema
                    heightUnit={unit}
                    widthUnit={unit}
                    table={{
                        seats: tableProps.seats,
                        width: tableProps.width,
                        height: tableProps.height,
                        variant: tableProps.variant
                    }}/>
            </div>
            <div className={styles.right}>
                <IconDate/>
                <Text>
                    {persons_count}
                </Text>
            </div>
        </div>
        <div className={styles.bottom}>
            <Text size={TEXT_SIZE.SM}>
                {tableProps.description}
            </Text>
        </div>
    </div>
}
