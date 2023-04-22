import { useState } from 'react'

import { Counter } from 'entities/counter'
import { useRestaurantsTranslation } from 'shared/lib'
import { TEXT_INPUT_VARIANT, TextInput } from 'shared/ui'

const Restaurants = () => {
    const [value, setValue] = useState('')
    const { t } = useRestaurantsTranslation()

    return (
        <div>{t('restaurants')}
            <Counter/>
            <TextInput variant={TEXT_INPUT_VARIANT.DEFAULT} value={value} onChange={setValue}/>
            <TextInput variant={TEXT_INPUT_VARIANT.CODE} value={value} onChange={setValue}/>
        </div>
    )
}

export default Restaurants
