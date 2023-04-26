import axios, { type AxiosStatic } from 'axios'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

import { type IStateSchema, type IThunkConfig } from 'app/providers/store'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

type IActionCreator<Return, Args, RejectedValue> =
    (args: Args) => AsyncThunkAction<Return, Args, IThunkConfig<RejectedValue>>

export class TestAsyncThunk<Return, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => IStateSchema
    actionCreator: IActionCreator<Return, Args, RejectedValue>
    navigate: jest.MockedFn<any>
    api: jest.MockedFunctionDeep<AxiosStatic>

    constructor (
        actionCreator: IActionCreator<Return, Args, RejectedValue>,
        state?: DeepPartial<IStateSchema>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = state ? jest.fn(() => state as IStateSchema) : jest.fn()
        this.navigate = jest.fn()
        this.api = mockedAxios
    }

    async callThunk (args: Args) {
        const action = this.actionCreator(args)
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate
        })

        return result
    }
}
