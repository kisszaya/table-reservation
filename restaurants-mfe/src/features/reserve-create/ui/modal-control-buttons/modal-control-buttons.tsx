import { Button, BUTTON_VARIANT } from 'shared/ui'

import styles from './modal-control-buttons.module.scss'

interface Props {
    onNext?: () => void
    disabled: boolean
    onPrevious?: () => void
}

export const ModalControlButtons = (props: Props) => {
    const { disabled, onNext, onPrevious } = props

    return <div className={styles.buttons}>
        {
            onPrevious && (
                <Button onClick={onPrevious} variant={BUTTON_VARIANT.OUTLINE}>
                    Назад
                </Button>
            )
        }
        {
            onNext && <Button onClick={onNext} disabled={disabled}>
                Далее
            </Button>
        }
    </div>
}
