import { createStore /* applyMiddleware  */ } from 'redux';
import allReducers from './reducers';

const initialState = {};
export default createStore(allReducers, initialState);
