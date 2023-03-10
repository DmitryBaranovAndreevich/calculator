/*eslint-disable */
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
/*eslint-enable */
import { AppDispatch, RootState } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
