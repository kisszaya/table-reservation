import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks'
import { TextInput, Title, TITLE_SIZE } from 'shared/ui'

import styles from './user-info-screen.module.scss'

import {
    createReserveActions,
    selectCreateReserveEmail,
    selectCreateReserveFirstName,
    selectCreateReserveLastName,
    selectCreateReservePhone
} from '../../model'
import { ModalControlButtons } from '..'

interface Props {
    onNext: () => void
    onPrevious: () => void
}

export const UserInfoScreen = (props: Props) => {
    const dispatch = useAppDispatch()
    const firstName = useSelector(selectCreateReserveFirstName)
    const lastName = useSelector(selectCreateReserveLastName)
    const email = useSelector(selectCreateReserveEmail)
    const phone = useSelector(selectCreateReservePhone)

    const fields = [
        {
            value: firstName || '',
            placeholder: 'Ваше имя ...',
            name: 'firstName',
            onChange: (value: string) =>
                dispatch(createReserveActions.setFirstName(value)),
            label: 'Имя'
        },
        {
            value: lastName || '',
            placeholder: 'Ваша фамилия ...',
            name: 'lastName',
            onChange: (value: string) =>
                dispatch(createReserveActions.setLastName(value)),
            label: 'Фамилия'
        },
        {
            value: email || '',
            placeholder: 'Ваша почта ...',
            name: 'email',
            onChange: (value: string) =>
                dispatch(createReserveActions.setEmail(value)),
            label: 'Почта'
        },
        {
            value: phone || '',
            placeholder: 'Ваш телефон ...',
            name: 'phone',
            onChange: (value: string) =>
                dispatch(createReserveActions.setPhone(value)),
            label: 'Телефон'
        }
    ]

    const { onNext, onPrevious } = props

    const disabled = !firstName || !lastName || !email || !phone

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title size={TITLE_SIZE.XS}>
                    Бронь места
                </Title>
                <div className={styles.fields}>
                    {
                        fields.map(field => (
                            <TextInput {...field} key={field.name}/>
                        ))
                    }
                </div>
            </div>

            <ModalControlButtons
                onNext={onNext}
                disabled={disabled}
                onPrevious={onPrevious}
            />
        </div>
    )
}
