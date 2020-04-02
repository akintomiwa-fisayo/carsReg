import { combineReducers } from 'redux';
import General from '../Reducer';
import Filters from '../components/Filters/Reducer';

const allReducers = combineReducers({
  General,
  Filters,
});
export default allReducers;
