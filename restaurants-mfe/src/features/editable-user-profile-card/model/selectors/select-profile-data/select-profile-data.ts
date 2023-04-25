import { type IStateSchema } from 'app/providers/store'
import { userProfileInitialState } from '../../'

export const selectProfileData = (state: IStateSchema) =>
    state?.userProfile?.data || userProfileInitialState.data
