
// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import store from './store'; // Import the store
// // import BudgetEntryScreen from './components/BudgetEntryScreen';

// // const App = () => {
// //   return (
// //     <Provider store={store}>
// //       <BudgetEntryScreen />  {/* Render the BudgetEntryScreen component */}
// //     </Provider>
// //   );
// // };

// // export default App;
// // src/App.js
// import React from 'react';
// import { Provider } from 'react-redux';

// import AppNavigator from './screens';
// import configureStore from './store';

// const store = configureStore();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>
//   );
// };

// export default App;
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BudgetEntryScreen from './components/BudgetEntryScreen';
import BudgetEntryListingScreen from './components/BudgetEntryListingScreen';
import { BudgetProvider } from './BudgetContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <BudgetProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
          <Stack.Screen name="BudgetEntryListing" component={BudgetEntryListingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BudgetProvider>
  );
};

export default App;
