import { memo, type ChangeEvent, useCallback } from 'react'

import { type ITextInputProps } from '../../types'
import { TEXT_INPUT_VARIANT } from '../..'
import { CodeVariantInput, DefaultVariantInput, SearchVariantInput } from '..'

export const TextInput = memo((props: ITextInputProps) => {
    const {
        onChange,
        variant = TEXT_INPUT_VARIANT.DEFAULT,
        readonly = false,
        ...otherProps
    } = props

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event?.target.value)
    }, [onChange])

    switch (variant) {
        case TEXT_INPUT_VARIANT.CODE:
            return <CodeVariantInput
                {...otherProps}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        case TEXT_INPUT_VARIANT.SEARCH:
            return <SearchVariantInput
                {...otherProps}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        default:
            return <DefaultVariantInput
                {...otherProps}
                onChange={onChangeHandler}
                readonly={readonly}
            />
    }
})
