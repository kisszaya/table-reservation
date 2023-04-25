import { memo, useMemo } from 'react'

import {
    EDITABLE_CARD_FIELD_VARIANT,
    EditableCard,
    type IEditableCardField
} from 'widgets/editable-card'
import { Button } from 'shared/ui'
import { type IProfile } from '../..'

export interface IProfileCardEditableProps {
    title: string
    editable: boolean
    save?: {
        btnText: string
        onSave: () => void
    }
    edit?: {
        btnText: string
        onEdit: () => void
    }
    cancel?: {
        btnText: string
        onCancel: () => void
    }
}

type Props = IProfile & {
    onChangeFullName?: (fullName: IProfile['fullName']) => void
    onChangeEmail?: (email: IProfile['email']) => void
    onChangePhone?: (phone: IProfile['phone']) => void

    editable?: IProfileCardEditableProps
}

export const ProfileCard = memo((props: Props) => {
    const {
        onChangeEmail,
        onChangeFullName,
        fullName,
        email,
        onChangePhone,
        phone,
        editable
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
    ]), [email, fullName, onChangeEmail, onChangeFullName, onChangePhone, phone])

    return (
        <div>
            {
                editable && <div>
                    <h4>
                        {editable.title}
                    </h4>
                    {
                        editable.edit &&
                        !editable.editable &&
                        <Button onClick={editable.edit.onEdit}>
                            {editable.edit.btnText}
                        </Button>
                    }
                    {
                        editable.editable && <div>
                            {
                                editable.cancel &&
                                <Button onClick={editable.cancel.onCancel}>
                                    {editable.cancel.btnText}
                                </Button>
                            }
                            {
                                editable.save &&
                                <Button onClick={editable.save.onSave}>
                                    {editable.save.btnText}
                                </Button>
                            }
                        </div>
                    }

                </div>
            }
            <EditableCard fields={fields} readonly={!editable?.editable}/>
        </div>
    )
})
