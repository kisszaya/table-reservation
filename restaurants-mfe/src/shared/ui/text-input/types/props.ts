import { type InputHTMLAttributes } from 'react'

import { type TEXT_INPUT_VARIANT } from '../const'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface ITextInputProps extends HTMLInputProps {
    value: string
    onChange?: (value: string) => void
    className?: string
    variant?: TEXT_INPUT_VARIANT
    autofocus?: boolean
    readonly?: boolean
}

type HTMLInputVariantProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

export interface ITextInputVariantProps extends HTMLInputVariantProps {
    value: string
    className?: string
    autofocus?: boolean
    readonly: boolean
}
