import { useModal } from 'shared/ui'

import { LoginModal } from '../ui'

export const useLoginByPhoneModal = () => {
    const { close, open } = useModal()
    return {
        close,
        open: () => { open(<LoginModal/>) }
    }
}
