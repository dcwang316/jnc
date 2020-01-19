
import { combineReducers } from 'redux';
import * as CommonActions from './reducers/CommonDatas';

export default combineReducers({
    ...CommonActions
});