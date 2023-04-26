import { useSelector } from 'react-redux'

import { useCallback, useMemo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks'
import { type IEditableCardEditableProps } from 'widgets/editable-card'
import {
    selectProfileDataEditable,
    selectProfileDataEmail,
    selectProfileDataFullName,
    selectProfileDataPhone, selectProfileDataValidationErrors, updateProfileData,
    userProfileActions
} from '../model'

export const useUserProfileCardValues = () => {
    const dispatch = useAppDispatch()

    const fullName = useSelector(selectProfileDataFullName)
    const phone = useSelector(selectProfileDataPhone)
    const email = useSelector(selectProfileDataEmail)
    const editableValue = useSelector(selectProfileDataEditable)
    const validationErrors = useSelector(selectProfileDataValidationErrors)

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

    const editable: IEditableCardEditableProps = useMemo(() => ({
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
    }), [editableValue, onCancel, onEdit, onSave])

    return {
        phone,
        email,
        fullName,
        onChangeFullName,
        onChangePhone,
        onChangeEmail,
        editable,
        validationErrors
    }
}
