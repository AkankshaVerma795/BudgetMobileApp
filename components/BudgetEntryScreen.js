// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { Button, TextField } from '@material-ui/core';

// // import { saveBudgetEntry } from '../actions';

// // const BudgetEntryScreen = () => {
// //   const [itemName, setItemName] = useState('');
// //   const [plannedAmount, setPlannedAmount] = useState(0);
// //   const [actualAmount, setActualAmount] = useState(0);
// //   const dispatch = useDispatch();

// //   const handleSave = () => {
// //     dispatch(saveBudgetEntry(itemName, plannedAmount, actualAmount));
// //     setItemName('');
// //     setPlannedAmount(0);
// //     setActualAmount(0);
// //   };

// //   return (
// //     <div>
// //       <h1>Budget Entry</h1>
// //       <TextField label="Item Name" value={itemName} onChangeText={setItemName} />
// //       <TextField label="Planned Amount" value={plannedAmount} onChangeText={setPlannedAmount} keyboardType="numeric" />
// //       <TextField label="Actual Amount" value={actualAmount} onChangeText={setActualAmount} keyboardType="numeric" />
// //       <Button variant="contained" color="primary" onClick={handleSave}>
// //         Save
// //       </Button>
// //     </div>
// //   );
// // };

// // export default BudgetEntryScreen;
// // src/components/BudgetEntryScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import { useDispatch } from 'react-redux';

// import { saveBudgetEntry } from '../actions';

// const BudgetEntryScreen = ({ navigation }) => {
//   const [itemName, setItemName] = useState('');
//   const [plannedAmount, setPlannedAmount] = useState('');
//   const [actualAmount, setActualAmount] = useState('');

//   const dispatch = useDispatch();

//   const saveEntry = () => {
//     const entry = {
//       itemName,
//       plannedAmount,
//       actualAmount,
//     };
//     dispatch(saveBudgetEntry(entry));
//     navigation.navigate('BudgetEntryListing');
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Item Name"
//         value={itemName}
//         onChangeText={setItemName}
//       />
//       <TextInput
//         placeholder="Planned Amount"
//         value={plannedAmount}
//         onChangeText={setPlannedAmount}
//         keyboardType="numeric"
//       />
//       <TextInput
//         placeholder="Actual Amount"
//         value={actualAmount}
//         onChangeText={setActualAmount}
//         keyboardType="numeric"
//       />
//       <Button title="Save" onPress={saveEntry} />
//     </View>
//   );
// };

// export default BudgetEntryScreen;
// BudgetEntryScreen.js
import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";

import { BudgetContext } from "../BudgetContext";

const BudgetEntryScreen = ({ navigation }) => {
  const { addBudgetEntry } = useContext(BudgetContext);
  const [itemName, setItemName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");

  const saveEntry = () => {
    const entry = {
      itemName,
      plannedAmount,
      actualAmount,
    };
    addBudgetEntry(entry);
    navigation.navigate("BudgetEntryListing");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={saveEntry} />
    </View>
  );
};

export default BudgetEntryScreen;
