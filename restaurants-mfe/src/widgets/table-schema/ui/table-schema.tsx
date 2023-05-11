import { type CSSProperties } from 'react'
import {
    type ITablePreview,
    SEAT_VARIANT, TABLE_VARIANT
} from 'kisszaya-table-reservation/lib/interfaces'

import { IconArmchair, IconChair } from 'shared/assets'

import cls from './table-schema.module.scss'

import { SEAT_POSITION_OPTIONS } from '../const'

interface Props {
  heightUnit: number
  widthUnit: number
  table: Omit<
    ITablePreview,
    'table_id' | 'title' | 'description' | 'persons_count' | 'restaurant_id'
  >
}

export const TableSchema = (props: Props) => {
    const { table, widthUnit, heightUnit } = props

    const containerStyles: CSSProperties = {
        width: `${(table.width + 2) * widthUnit}px`,
        height: `${(table.height + 2) * heightUnit}px`
    }

    const tableStyles: CSSProperties = {
        left: `${widthUnit}px`,
        borderRadius: table.variant === TABLE_VARIANT.SQUARE ? '4px' : '50%',
        top: `${heightUnit}px`,

        width: `${table.width * widthUnit}px`,
        height: `${table.height * heightUnit}px`
    }

    return (
        <div className={cls.container} style={containerStyles}>
            <div className={cls.table} style={tableStyles}/>
            {table.seats.map((seat) => {
                const { x, y, angle } = SEAT_POSITION_OPTIONS[seat.position]
                const left = (x(seat.position_id, table.width) - 1) * widthUnit
                const top = (y(seat.position_id, table.height) - 1) * heightUnit

                return (
                    <div
                        key={seat.seat_id}
                        className={cls.icon}
                        style={{
                            transform: `rotate(${angle}deg)`,
                            top: `${top}px`,
                            left: `${left}px`
                        }}
                    >
                        {seat.variant === SEAT_VARIANT.CHAR
                        ? (<IconChair height={heightUnit} width={widthUnit} />)
                        : (<IconArmchair height={heightUnit} width={widthUnit} />)
                        }
                    </div>
                )
            })}
        </div>
    )
}
