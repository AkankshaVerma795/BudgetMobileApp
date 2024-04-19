// // src/components/BudgetEntryListingScreen.js
// import React from 'react';
// import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';

// const BudgetEntryListingScreen = () => {
//   const budgetEntries = useSelector((state) => state.budgetEntries);

//   return (
//     <View>
//       <Text>Budget Entry Listing</Text>
//       {budgetEntries.map((entry, index) => (
//         <View key={index}>
//           <Text>{entry.itemName}</Text>
//           <Text>Planned Amount: {entry.plannedAmount}</Text>
//           <Text>Actual Amount: {entry.actualAmount}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default BudgetEntryListingScreen;
// BudgetEntryListingScreen.js
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { BudgetContext } from "../BudgetContext";

const BudgetEntryListingScreen = () => {
  const { budgetEntries } = useContext(BudgetContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Budget Entry Listing</Text>
      {budgetEntries.map((entry, index) => (
        <View key={index}>
          <Text>{entry.itemName}</Text>
          <Text>Planned Amount: {entry.plannedAmount}</Text>
          <Text>Actual Amount: {entry.actualAmount}</Text>
        </View>
      ))}
    </View>
  );
};

export default BudgetEntryListingScreen;
