import { type IStateSchema } from 'app/providers/store'
import { userProfileDataInitialState } from 'features/editable-user-profile-card/model'

export const selectProfileDataPhone = (state: IStateSchema) =>
    state?.userProfile?.form?.phone || userProfileDataInitialState.phone
