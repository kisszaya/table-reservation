import { type StoryFn } from '@storybook/react'

import { I18nextProvider } from 'react-i18next'
import { i18nForTests } from 'shared/config'
import { Suspense } from 'react'

export const TranslationDecorator = (StoryComponent: StoryFn) => {
    return (
        <I18nextProvider i18n={i18nForTests}>
            <Suspense fallback=''>
                <StoryComponent/>
            </Suspense>
        </I18nextProvider>
    )
}
