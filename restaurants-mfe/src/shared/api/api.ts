import axios from 'axios'
import { getFromLocalStorage } from 'shared/lib'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const'

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: getFromLocalStorage(LOCAL_STORAGE_USER_KEY)
    }
})
