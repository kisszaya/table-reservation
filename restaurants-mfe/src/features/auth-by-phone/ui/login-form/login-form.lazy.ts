import { type FC, lazy } from 'react'
import { type LoginFormProps } from './login-form'

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
    async () => await import('./login-form')
)
