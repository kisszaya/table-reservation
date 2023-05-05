import { type FC } from 'react'

import { type ITextInputVariantProps } from '../../types'

export const SearchVariantInput: FC<ITextInputVariantProps> = (props) => {
    const { readonly, ...otherProps } = props

    return <input {...otherProps} disabled={readonly}/>
}
