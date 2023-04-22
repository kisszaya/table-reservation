import { useDispatch, useSelector } from 'react-redux'

import { useDefaultTranslation } from 'shared/lib'
import { counterActions, getCounterValue } from '../model'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useDefaultTranslation()

    const onIncrement = () => {
        dispatch(counterActions.increment())
    }

    const onDecrement = () => {
        dispatch(counterActions.decrement())
    }

    return <div>
        <h1 data-testid='value-title'>
            {counterValue}
        </h1>
        <button onClick={onIncrement} data-testid='increment-btn'>
            {t('increment')}
        </button>
        <button onClick={onDecrement} data-testid='decrement-btn'>
            {t('decrement')}
        </button>
    </div>
}
