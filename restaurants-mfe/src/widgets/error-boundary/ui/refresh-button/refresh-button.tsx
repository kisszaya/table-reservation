import { useDefaultTranslation } from 'shared/lib'

export const RefreshButton = () => {
    const { t } = useDefaultTranslation()
    const onRefreshPage = () => {
        location.reload()
    }

    return (
        <button onClick={onRefreshPage}>
            {t('errorBoundary.refreshButtonText')}
        </button>
    )
}
