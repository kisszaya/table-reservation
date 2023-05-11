import { EditableUserProfileCard } from 'features/editable-user-profile-card'

import { ReservesList } from 'entities/reserve'
import styles from './reserves.module.scss'

const Reserves = () => {
    return (
        <div className={styles.container}>
            <ReservesList/>
            <EditableUserProfileCard className={styles.right}/>
        </div>
    )
}

export default Reserves
