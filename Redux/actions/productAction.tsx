export const UPDATE_PRODUCT = '[Announcement] update'
import { IStateFinal,ProductAction,DispatchType } from '../interfaces/StateInterface'


export const updateAnnouncement = (data: IStateFinal) => (dispatch: DispatchType) => {
  return dispatch({ type: UPDATE_PRODUCT, data })
}