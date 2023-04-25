import { memo, type ChangeEvent, useCallback } from 'react'

import { type ITextInputProps } from '../../types'
import { TEXT_INPUT_VARIANT } from '../..'
import { CodeVariantInput, DefaultVariantInput } from '..'

export const TextInput = memo((props: ITextInputProps) => {
    const { onChange, variant = TEXT_INPUT_VARIANT.DEFAULT, ...otherProps } = props

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event?.target.value)
    }, [onChange])

    switch (variant) {
        case TEXT_INPUT_VARIANT.CODE:
            return <CodeVariantInput {...otherProps} onChange={onChangeHandler}/>
        default:
            return <DefaultVariantInput {...otherProps} onChange={onChangeHandler}/>
    }
})
