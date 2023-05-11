import { memo, useMemo } from 'react'
import classNames from 'classnames'

import { TextInput } from 'shared/ui'
import { validationErrorTexts } from 'shared/const'

import styles from './editable-card.module.scss'

import { EditableHeader } from '..'
import { EDITABLE_CARD_FIELD_VARIANT, type IEditableCardProps } from '../..'

export const EditableCard = memo((props: IEditableCardProps) => {
    const {
        editable,
        fields,
        validationErrors,
        className
    } = props

    const elements = useMemo(() => {
        const readonly = !editable?.editable || false

        return fields.map(field => {
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
    }
    , [fields, editable])

    const errors = useMemo(() => {
        if (!validationErrors) return null
        return <div>
            {
                validationErrors.map(err => (
                    <p key={err}>{validationErrorTexts[err]}</p>
                ))
            }
        </div>
    }, [validationErrors])

    return <div className={classNames(styles.elements, className)}>
        { editable && <EditableHeader editable={editable}/>}
        {errors}
        {elements}
    </div>
})
