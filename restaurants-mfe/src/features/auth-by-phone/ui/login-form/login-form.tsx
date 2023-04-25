import { useDispatch, useSelector } from 'react-redux'
import { type FC, useCallback, useEffect } from 'react'

import { Button, TextInput, useModal } from 'shared/ui'
import { selectUserAuthData } from 'entities/user'

import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { useDefaultTranslation } from 'shared/lib'
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

const LoginForm: FC<LoginFormProps> = (props) => {
    const { close } = useModal()
    const { t } = useDefaultTranslation()

    // store
    const phone = useSelector(selectLoginByPhonePhone)
    const isLoading = useSelector(selectLoginByPhoneLoading)
    const error = useSelector(selectLoginByPhoneError)
    const userData = useSelector(selectUserAuthData)
    const dispatch = useDispatch()

    const onChangePhone = useCallback((value: string) => {
        dispatch(loginByPhoneActions.setPhone(value))
    }, [dispatch])

    useEffect(() => {
        if (userData) {
            close()
        }
    }, [close, userData])

    const onSubmit = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(loginByPhone({ phone }))
    }

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
}

export default LoginForm
