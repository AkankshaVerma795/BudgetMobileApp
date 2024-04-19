// export const saveBudgetEntry = (itemName, plannedAmount, actualAmount) => ({
//     type: 'SAVE_BUDGET_ENTRY',
//     payload: { itemName, plannedAmount, actualAmount },
//   });
  // src/actions/budgetActions.js
export const SAVE_BUDGET_ENTRY = 'SAVE_BUDGET_ENTRY';

export const saveBudgetEntry = (entry) => ({
  type: SAVE_BUDGET_ENTRY,
  payload: entry,
});
