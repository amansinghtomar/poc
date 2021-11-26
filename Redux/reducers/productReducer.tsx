
import  {UPDATE_PRODUCT} from '../actions/productAction'
import { IStateFinal, ProductAction, DispatchType } from '../interfaces/StateInterface'
import {HYDRATE} from 'next-redux-wrapper';

const initialState: IStateFinal= {
  data: [{
    id: '1',
  productImage: '',
  productTitle: '',
  productSubDetail: '',
  productDescription:''
    
 }]
}

export const reducer = (state:IStateFinal = initialState, action: ProductAction) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return Object.assign({}, state, { data: action.data })
    default: return state
  }
}