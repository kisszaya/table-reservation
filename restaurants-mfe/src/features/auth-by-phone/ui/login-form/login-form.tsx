import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'

import { Button, TextInput, useModal } from 'shared/ui'

import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { useDefaultTranslation } from 'shared/lib'
import { useAppDispatch } from 'shared/lib/hooks'
import {
    loginByPhone,
    loginByPhoneActions,
    loginByPhoneReducer,
    selectLoginByPhoneError,
    selectLoginByPhoneLoading,
    selectLoginByPhonePhone
} from '../../model'

export interface LoginFormProps {
    className?: string
}

const asyncReducers: IReducersList = {
    loginByPhone: loginByPhoneReducer
}

const LoginForm = memo((props: LoginFormProps) => {
    const { close: closeModal } = useModal()
    const { t } = useDefaultTranslation()

    // store
    const phone = useSelector(selectLoginByPhonePhone)
    const isLoading = useSelector(selectLoginByPhoneLoading)
    const error = useSelector(selectLoginByPhoneError)
    const dispatch = useAppDispatch()

    const onChangePhone = useCallback((value: string) => {
        dispatch(loginByPhoneActions.setPhone(value))
    }, [dispatch])

    const onSubmit = useCallback(async () => {
        const result = await dispatch(loginByPhone({ phone }))
        if (result.meta.requestStatus === 'fulfilled') {
            closeModal()
        }
    }, [dispatch, phone])

    return (
        <DynamicModuleLoader reducers={asyncReducers}>
            <div className={props.className}>
                {error && <div>{JSON.stringify(error)}</div>}
                <TextInput value={phone} onChange={onChangePhone} placeholder='phone' name='phone'/>
                <Button type='submit' disabled={isLoading} onClick={onSubmit}>
                    {t('auth.loginForm.loginBtn')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
