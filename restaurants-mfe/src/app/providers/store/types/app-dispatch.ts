import { type createReduxStore } from '..'

export type IAppDispatch = ReturnType<typeof createReduxStore>['dispatch']
