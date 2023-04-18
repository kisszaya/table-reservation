import { useCallback } from 'react'

import { Button, BUTTON_VARIANT } from 'shared/ui'

import { IconTranslate } from 'shared/assets'
import { useDefaultTranslation } from 'shared/lib'
import { LANGUAGES } from 'shared/const'

export const LanguageSwitcher = () => {
    const { i18n } = useDefaultTranslation()

    const onChangeLanguage = useCallback(async () => {
        await i18n.changeLanguage(
      i18n.language === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN
        )
    }, [])

    return (
        <Button variant={BUTTON_VARIANT.CLEAR} onClick={onChangeLanguage}>
            <IconTranslate />
        </Button>
    )
}
