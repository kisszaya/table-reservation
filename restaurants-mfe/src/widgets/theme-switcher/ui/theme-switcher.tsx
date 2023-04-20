import { type FC } from 'react'

import { useTheme } from 'features/theme-provider'
import { Button, BUTTON_VARIANT } from 'shared/ui'
import { IconTheme } from 'shared/assets'

interface Props {

}

export const ThemeSwitcher: FC<Props> = (props) => {
    const { toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} variant={BUTTON_VARIANT.CLEAR}>
            <IconTheme />
        </Button>
    )
}
