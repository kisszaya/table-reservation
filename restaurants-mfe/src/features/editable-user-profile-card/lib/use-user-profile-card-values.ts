import { useSelector } from 'react-redux'

import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks'
import { type IProfileCardEditableProps } from 'entities/profile'
import {
    selectProfileDataEditable,
    selectProfileDataEmail,
    selectProfileDataFullName,
    selectProfileDataPhone, updateProfileData,
    userProfileActions
} from '../model'

export const useUserProfileCardValues = () => {
    const dispatch = useAppDispatch()

    const fullName = useSelector(selectProfileDataFullName)
    const phone = useSelector(selectProfileDataPhone)
    const email = useSelector(selectProfileDataEmail)
    const editableValue = useSelector(selectProfileDataEditable)

    const onChangeFullName = useCallback((fullName: string) => {
        dispatch(userProfileActions.updateProfileData({ fullName }))
    }, [dispatch])

    const onChangeEmail = useCallback((email: string) => {
        dispatch(userProfileActions.updateProfileData({ email }))
    }, [dispatch])

    const onChangePhone = useCallback((phone: string) => {
        dispatch(userProfileActions.updateProfileData({ phone }))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(userProfileActions.cancelEdit())
    }, [dispatch])

    const onEdit = useCallback(() => {
        dispatch(userProfileActions.startEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    const editable: IProfileCardEditableProps = {
        title: '',
        editable: editableValue,
        edit: {
            onEdit,
            btnText: 'Edit'
        },
        cancel: {
            onCancel,
            btnText: 'Cancel'
        },
        save: {
            onSave,
            btnText: 'Save'
        }
    }

    return { phone, email, fullName, onChangeFullName, onChangePhone, onChangeEmail, editable }
}
