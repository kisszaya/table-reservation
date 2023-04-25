import { type FC, type PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'

import { userActions } from 'entities/user'
import { useDefaultTranslation } from 'shared/lib'

export const PrivateLayout: FC<PropsWithChildren> = (props) => {
    const { t } = useDefaultTranslation()
    const dispatch = useDispatch()
    const { children } = props

    return <div>
        <button onClick={() => dispatch(userActions.logout())}>
            {t('auth.logoutBtn')}
        </button>
        {children}
    </div>
}
