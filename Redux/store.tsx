import { createStore, applyMiddleware,Store  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { IState } from './interfaces/StateInterface'
import { reducer } from './reducers/productReducer'
import { IStateFinal, ProductAction, DispatchType } from './interfaces/StateInterface'
import logger from 'redux-logger'

export const store: Store<IStateFinal, ProductAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunkMiddleware,logger))
