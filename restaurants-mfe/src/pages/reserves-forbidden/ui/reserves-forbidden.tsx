import { useReservesForbiddenTranslation } from 'shared/lib'
import { Button, Modal } from 'shared/ui'
import { useIsVisible } from 'features/helpers'

const ReservesForbidden = () => {
    const { isVisible, toggleVisibility } = useIsVisible(false)
    const { t } = useReservesForbiddenTranslation()

    return <div>
        <h3>
            {t('signInTitle')}
        </h3>
        <Button onClick={toggleVisibility}>
            {t('signInButton')}
        </Button>
        <Modal opened={isVisible} onClose={toggleVisibility}>
            {t('')}
        </Modal>
    </div>
}

export default ReservesForbidden
