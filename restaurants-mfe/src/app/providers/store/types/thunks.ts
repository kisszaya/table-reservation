import { type AxiosInstance } from 'axios'
import { type NavigateFunction } from 'react-router-dom'
import { type IStateSchema } from '.'

interface IThunkExtraArg {
    api: AxiosInstance
    navigate?: NavigateFunction
}

export interface IThunkConfig<RejectValue> {
    rejectValue?: RejectValue
    extra: IThunkExtraArg
    state: IStateSchema
}
