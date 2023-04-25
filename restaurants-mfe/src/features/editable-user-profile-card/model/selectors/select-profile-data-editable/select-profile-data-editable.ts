import { type IStateSchema } from 'app/providers/store'
import { userProfileInitialState } from 'features/editable-user-profile-card/model'

export const selectProfileDataEditable = (state: IStateSchema) =>
    state?.userProfile?.editable || userProfileInitialState.editable
