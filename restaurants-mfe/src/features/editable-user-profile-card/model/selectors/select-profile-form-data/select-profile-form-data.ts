import { type IStateSchema } from 'app/providers/store'
import { userProfileInitialState } from '../../'

export const selectProfileFormData = (state: IStateSchema) =>
    state?.userProfile?.form || userProfileInitialState.form
