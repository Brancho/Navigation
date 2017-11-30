import {combineReducers} from 'redux';
import activeReducer from './activeReducer'

const rootReducer = combineReducers({
  active: activeReducer,
  navigation: (state = {}) => state
});

export default rootReducer;