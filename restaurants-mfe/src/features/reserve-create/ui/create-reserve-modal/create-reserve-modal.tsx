import { useState } from 'react'

import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'

import styles from './create-reserve-modal.module.scss'

import { MODAL_SCREEN, modalScreensInfo } from '../../const'
import { createReserveReducer } from '../../model'

const asyncReducers: IReducersList = {
    createReserve: createReserveReducer
}

export const CreateReserveModal = () => {
    const [activeScreen, setActiveScreen] = useState<MODAL_SCREEN>(MODAL_SCREEN.TIME)

    const Component = modalScreensInfo[activeScreen].component
    const next = modalScreensInfo[activeScreen].next
    const previous = modalScreensInfo[activeScreen].previous

    return (
        <DynamicModuleLoader reducers={asyncReducers}>
            <div className={styles.modal}>
                <Component
                    onNext={() => { next && setActiveScreen(next) }}
                    onPrevious={() => { previous && setActiveScreen(previous) }}
                />
            </div>
        </DynamicModuleLoader>
    )
}
