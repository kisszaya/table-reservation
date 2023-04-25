import { memo, useMemo } from 'react'

import { TextInput } from 'shared/ui'
import { EDITABLE_CARD_FIELD_VARIANT, type IEditableCardProps } from '..'

export const EditableCard = memo((props: IEditableCardProps) => {
    const { readonly, fields } = props

    const elements = useMemo(() =>
        fields.map(field => {
            switch (field.variant) {
                case EDITABLE_CARD_FIELD_VARIANT.NUMBER: {
                    return <div/>
                }
                case EDITABLE_CARD_FIELD_VARIANT.TEXT: {
                    const { variant, ...inputProps } = field
                    return <TextInput {...inputProps} readonly={readonly}/>
                }
                default: {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const _: never = field
                    throw new Error('implement case for EditableCard')
                }
            }
        })
    , [fields, readonly])

    return <div>
        {elements}
    </div>
})
