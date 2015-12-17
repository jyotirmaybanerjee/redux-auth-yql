//yahooFinance
import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  stocks: {}
}

const actionHandlers = {
  [constants.FETCH_STOCK]: (state, action) => ({ stocks: action.stocks })
}

export default createReducer(initialState, actionHandlers)
