import { Suspense, type FC } from 'react'
import { Loader } from 'shared/ui'
import { LoginFormLazy } from '..'

interface Props {

}

export const LoginModal: FC<Props> = (props) => {
    return <div>
        <Suspense fallback={<Loader/>}>
            <LoginFormLazy/>
        </Suspense>
    </div>
}
