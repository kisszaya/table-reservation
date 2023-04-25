import {
    type FC,
    type PropsWithChildren,
    type ReactNode,
    useCallback,
    useMemo,
    useState
} from 'react'

import { Modal } from '..'
import { type IModalContext, ModalContext } from '../../lib'

export const ModalProvider: FC<PropsWithChildren> = (props) => {
    const [component, setComponent] = useState(null)
    const { children } = props

    const close = useCallback(() => {
        setComponent(null)
    }, [])

    const open = useCallback((component: ReactNode) => {
        setComponent(component)
    }, [])

    const contextValues: IModalContext = useMemo(() => ({
        close,
        open
    }), [close, open])

    return (
        <ModalContext.Provider value={contextValues}>
            {component && <Modal opened={!!component} onClose={close}>
                {component}
            </Modal>}
            {children}
        </ModalContext.Provider>
    )
}
