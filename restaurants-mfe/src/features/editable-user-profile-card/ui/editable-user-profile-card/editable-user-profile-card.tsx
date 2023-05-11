import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { ProfileCard } from 'entities/profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks'
import { fetchProfileData, userProfileReducer } from '../../model'
import { useUserProfileCardValues } from '../../lib'

const asyncReducers: IReducersList = {
    userProfile: userProfileReducer
}

interface Props {
    className?: string
}

export const EditableUserProfileCard = (props: Props) => {
    const dispatch = useAppDispatch()
    const values = useUserProfileCardValues()

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    return <DynamicModuleLoader reducers={asyncReducers}>
        <ProfileCard {...values} className={props.className}/>
    </DynamicModuleLoader>
}
