import React, {
    useRef,
    useState,
    type FC,
    type PropsWithChildren,
    useEffect,
    useCallback
} from 'react'
import cx from 'classnames'

import { Portal } from 'shared/ui'
import styles from './modal.module.scss'

interface Props {
    opened: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 200

export const Modal: FC<PropsWithChildren<Props>> = (props) => {
    const { children, opened, onClose } = props
    const [closing, setClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const keydownHandler = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        window.addEventListener('keydown', keydownHandler)
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', keydownHandler)
        }
    }, [keydownHandler])

    const toggleContent = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    return (
        <Portal>
            <div
                className={
                    cx(styles.container, { [styles.opened]: opened, [styles.closing]: closing })
                }
            >
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={toggleContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
