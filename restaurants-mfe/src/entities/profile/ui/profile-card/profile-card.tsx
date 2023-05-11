import { memo, useMemo } from 'react'

import {
    EDITABLE_CARD_FIELD_VARIANT,
    EditableCard, type IEditableCardBasicProps,
    type IEditableCardField
} from 'widgets/editable-card'
import { type IProfile } from '../..'

interface Props extends IEditableCardBasicProps {
    fullName: IProfile['fullName']
    email: IProfile['email']
    phone: IProfile['phone']
    onChangeFullName?: (fullName: IProfile['fullName']) => void
    onChangeEmail?: (email: IProfile['email']) => void
    onChangePhone?: (phone: IProfile['phone']) => void
}

export const ProfileCard = memo((props: Props) => {
    const {
        className,
        onChangeEmail,
        onChangeFullName,
        fullName,
        email,
        onChangePhone,
        phone,
        editable,
        validationErrors
    } = props

    const fields: IEditableCardField[] = useMemo(() => ([
        {
            variant: EDITABLE_CARD_FIELD_VARIANT.TEXT,
            onChange: onChangeEmail,
            value: email
        },
        {
            variant: EDITABLE_CARD_FIELD_VARIANT.TEXT,
            onChange: onChangeFullName,
            value: fullName
        },
        {
            variant: EDITABLE_CARD_FIELD_VARIANT.TEXT,
            onChange: onChangePhone,
            value: phone
        }
    ]), [
        email,
        fullName,
        onChangeEmail,
        onChangeFullName,
        onChangePhone,
        phone])

    return (
        <EditableCard
            className={className}
            fields={fields}
            editable={editable}
            validationErrors={validationErrors}/>
    )
})
