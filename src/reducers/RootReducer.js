import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import todos from './TodosReducer';
import settings from './SettingsReducer';

const rootReducer = combineReducers({
  todos,
  error,
  user,
  status,
  settings
});

export default rootReducer;
