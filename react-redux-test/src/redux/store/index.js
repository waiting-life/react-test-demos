import {createStore, combineReducers} from 'redux'
import countReducer from '../reducers/count'
import personReducer from '../reducers/person'

const reducer = combineReducers({
  count: countReducer,
  persons: personReducer
})
export const store = createStore(reducer) 