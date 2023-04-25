import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { ProfileCard } from 'entities/profile'
import { userProfileReducer } from '../../model'
import { useUserProfileCardValues } from '../../lib'

const asyncReducers: IReducersList = {
    userProfile: userProfileReducer
}

export const EditableUserProfileCard = () => {
    const values = useUserProfileCardValues()

    return <DynamicModuleLoader reducers={asyncReducers}>
        <ProfileCard {...values}/>
    </DynamicModuleLoader>
}
