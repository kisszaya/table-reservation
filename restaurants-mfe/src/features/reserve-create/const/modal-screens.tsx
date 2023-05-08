import { type FunctionComponent } from 'react'
import {
    ConfirmationScreen
} from '../ui/confirmation-screen/confirmation-screen'
import {
    DetailsScreen
} from '../ui/details-screen/details-screen'
import {
    TimeScreen
} from '../ui/time-screen/time-screen'
import {
    UserInfoScreen
} from '../ui/user-info-screen/user-info-screen'

export enum MODAL_SCREEN {
    CONFIRMATION = 'CONFIRMATION',
    DETAILS = 'DETAILS',
    TIME = 'TIME',
    USER_INFO = 'USER_INFO'
}

export const modalScreensInfo:
    Record<MODAL_SCREEN, {
    component: FunctionComponent<{ onNext: () => void, onPrevious: () => void }>
        next?: MODAL_SCREEN
        previous?: MODAL_SCREEN
}> =
    {
        [MODAL_SCREEN.TIME]: {
            next: MODAL_SCREEN.DETAILS,
            component: TimeScreen
        },
        [MODAL_SCREEN.DETAILS]: {
            next: MODAL_SCREEN.USER_INFO,
            component: DetailsScreen,
            previous: MODAL_SCREEN.TIME
        },
        [MODAL_SCREEN.USER_INFO]: {
            next: MODAL_SCREEN.CONFIRMATION,
            component: UserInfoScreen,
            previous: MODAL_SCREEN.DETAILS
        },
        [MODAL_SCREEN.CONFIRMATION]: {
            component: ConfirmationScreen,
            previous: MODAL_SCREEN.USER_INFO
        }
    }
