import {combineReducers} from 'redux'

import getCarsDataReducer from "./carsData"
import saveAddReducer from './saveAdd'

export default combineReducers({
    
    carsData: getCarsDataReducer,
    SaveAdd:saveAddReducer
})