import { useDefaultTranslation } from 'shared/lib'
import styles from './page-error.module.scss'
import { RefreshButton } from '..'

export const PageError = () => {
    const { t } = useDefaultTranslation()

    return <div className={styles.container}>
        <div className={styles.main}>
            <h3 className={styles.title}>
                {t('errorBoundary.title')}
            </h3>
            <RefreshButton/>
        </div>
    </div>
}
