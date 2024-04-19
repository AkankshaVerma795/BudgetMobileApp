// BudgetContext.js
import React, { createContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgetEntries, setBudgetEntries] = useState([]);

  const addBudgetEntry = (entry) => {
    setBudgetEntries([...budgetEntries, entry]);
  };

  return (
    <BudgetContext.Provider value={{ budgetEntries, addBudgetEntry }}>
      {children}
    </BudgetContext.Provider>
  );
};
