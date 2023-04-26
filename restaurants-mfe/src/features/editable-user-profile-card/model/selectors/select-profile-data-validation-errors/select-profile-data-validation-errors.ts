import { type IStateSchema } from 'app/providers/store'
import { userProfileInitialState } from 'features/editable-user-profile-card/model'

export const selectProfileDataValidationErrors = (state: IStateSchema) =>
    state?.userProfile?.validationErrors || userProfileInitialState.validationErrors
