import { type FC, type PropsWithChildren } from 'react'
import styles from './public-layout.module.scss'
import { Navbar } from '..'

export const PublicLayout: FC<PropsWithChildren> = (props) => {
    const { children } = props

    return <div className={styles.container}>
        <Navbar/>
        {children}
    </div>
}
