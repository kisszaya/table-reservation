import { type IStateSchema } from 'app/providers/store'
import { userProfileDataInitialState } from 'features/editable-user-profile-card/model'

export const selectProfileDataEmail = (state: IStateSchema) =>
    state?.userProfile?.form?.email || userProfileDataInitialState.email
