import { useTheme } from 'features/theme-provider'
import { Button, BUTTON_VARIANT } from 'shared/ui'

import { IconTheme } from 'shared/assets'

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} variant={BUTTON_VARIANT.CLEAR}>
            <IconTheme />
        </Button>
    )
}
