// import { createStore } from 'redux';
// import budgetReducer from './reducers';

// const store = createStore(budgetReducer);

// export default store;
// src/store/configureStore.js
import { createStore, combineReducers } from 'redux';

import budgetReducer from '../reducers';

const rootReducer = combineReducers({
  budget: budgetReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
