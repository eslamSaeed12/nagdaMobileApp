import {createStore, applyMiddleware} from 'redux';
import Reducer from '../reducers/main.reducer';
import Thunk from 'redux-thunk';
const store = createStore(Reducer, applyMiddleware(Thunk));

export default store;
