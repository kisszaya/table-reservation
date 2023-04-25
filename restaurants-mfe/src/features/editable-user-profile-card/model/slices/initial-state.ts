import { type IUserProfileSchema } from '..'

export const userProfileDataInitialState: IUserProfileSchema['data'] = {
    email: '',
    phone: '',
    fullName: ''
}
export const userProfileInitialState: IUserProfileSchema = {
    data: userProfileDataInitialState,
    editable: false,
    isLoading: false,
    error: null,
    form: userProfileDataInitialState
}
