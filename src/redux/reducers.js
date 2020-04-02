import { combineReducers } from 'redux';
import General from '../Reducer';
import Filters from '../components/filters/Reducer';
import CarOwners from '../components/carowners/Reducer';

const allReducers = combineReducers({
  General,
  CarOwners,
  Filters,
});
export default allReducers;
