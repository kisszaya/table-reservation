import { useContext } from 'react'

import { ModalContext } from '.'

export const useModal = () => {
    const values = useContext(ModalContext)
    if (!values) throw new Error('Implement Modal Provider')
    return values
}
