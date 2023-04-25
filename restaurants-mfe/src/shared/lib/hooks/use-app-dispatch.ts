import { useDispatch } from 'react-redux'
import { type IAppDispatch } from 'app/providers/store'

export const useAppDispatch = () => {
    return useDispatch<IAppDispatch>()
}
