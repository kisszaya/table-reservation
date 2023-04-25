import { memo } from 'react'
import { Loader } from 'shared/ui'
import styles from './page-loader.module.scss'

export const PageLoader = memo(() => {
    return (
        <div className={styles.container}>
            <Loader/>
        </div>
    )
})
