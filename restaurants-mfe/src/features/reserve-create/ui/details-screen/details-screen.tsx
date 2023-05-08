import { useSelector } from 'react-redux'

import { NumberInput, Title, TITLE_SIZE } from 'shared/ui'
import { useAppDispatch } from 'shared/lib/hooks'

import styles from './details-screen.module.scss'

import { createReserveActions, selectCreateReservePersonsCount } from '../../model'

import { ModalControlButtons } from '..'

interface Props {
    onNext: () => void
    onPrevious: () => void
}

export const DetailsScreen = (props: Props) => {
    const dispatch = useAppDispatch()
    const persons_count = useSelector(selectCreateReservePersonsCount)
    const { onNext, onPrevious } = props

    const changePersonsCount = (value: number) => {
        dispatch(createReserveActions.setPersonsCount(value))
    }

    const disabled = !persons_count

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title size={TITLE_SIZE.XS}>
                    Бронь места
                </Title>

                <NumberInput
                    min={0}
                    onChange={changePersonsCount}
                    value={persons_count || 0}
                    label='Сколько будет человек?'
                />
            </div>

            <ModalControlButtons
                onNext={onNext}
                disabled={disabled}
                onPrevious={onPrevious}
            />
        </div>
    )
}
