// import { AsyncStorage } from 'async-storage';

// const initialState = {
//   budgetEntries: [],
// };

// const budgetReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SAVE_BUDGET_ENTRY':
//       const newEntry = { ...action.payload, id: Date.now() }; // Add unique ID
//       const updatedEntries = [...state.budgetEntries, newEntry];
//       storeData(updatedEntries);
//       return { ...state, budgetEntries: updatedEntries };
//     default:
//       return state;
//   }
// };

// const storeData = async (data) => {
//   try {
//     await AsyncStorage.setItem('@BudgetEntries', JSON.stringify(data));
//   } catch (error) {
//     console.error('Error storing data:', error);
//   }
// };

// export default budgetReducer;
// src/reducers/budgetReducer.js
import { SAVE_BUDGET_ENTRY } from "../actions";

const initialState = {
  budgetEntries: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BUDGET_ENTRY:
      return {
        ...state,
        budgetEntries: [...state.budgetEntries, action.payload],
      };
    default:
      return state;
  }
};

export default budgetReducer;
