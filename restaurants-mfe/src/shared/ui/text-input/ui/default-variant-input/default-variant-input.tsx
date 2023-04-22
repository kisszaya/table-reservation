import { type FC } from 'react'

import { type ITextInputVariantProps } from '../../types'

export const DefaultVariantInput: FC<ITextInputVariantProps> = (props) => {
    return <input {...props}/>
}
