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

export interface IEditableCardProps {
    fields: IEditableCardField[]
    readonly?: boolean
}
