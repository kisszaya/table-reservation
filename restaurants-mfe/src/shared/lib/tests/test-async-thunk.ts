import { type IStateSchema } from 'app/providers/store'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

type IActionCreator<Return, Args, RejectedValue> =
    (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => IStateSchema
    actionCreator: IActionCreator<Return, Args, RejectedValue>

    constructor (actionCreator: IActionCreator<Return, Args, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (args: Args) {
        const action = this.actionCreator(args)
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
