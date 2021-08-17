import { combineReducers } from 'redux';
import shopreducer from './shopping/shopreducer';
const rootReducer = combineReducers({
  shop: shopreducer,
});

export default rootReducer;
