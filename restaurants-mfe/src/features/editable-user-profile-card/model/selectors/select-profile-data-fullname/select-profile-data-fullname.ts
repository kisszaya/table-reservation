import { type IStateSchema } from 'app/providers/store'
import { userProfileDataInitialState } from 'features/editable-user-profile-card/model'

export const selectProfileDataFullName = (state: IStateSchema) =>
    state?.userProfile?.form?.fullName || userProfileDataInitialState.fullName
