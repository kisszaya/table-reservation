import { type VALIDATION_ERROR } from 'shared/const'
import { type EDITABLE_CARD_FIELD_VARIANT } from '..'

export type IEditableCardField = {
    value: string
    onChange?: (value: string) => void
    variant: EDITABLE_CARD_FIELD_VARIANT.TEXT
    placeholder?: string
} | {
    value: number
    onChange?: (value: number) => void
    variant: EDITABLE_CARD_FIELD_VARIANT.NUMBER
    placeholder?: string
}

export interface IEditableCardEditableProps {
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

export interface IEditableCardBasicProps {
    editable?: IEditableCardEditableProps
    validationErrors?: null | VALIDATION_ERROR[]
}

export interface IEditableCardProps extends IEditableCardBasicProps {
    fields: IEditableCardField[]
}
