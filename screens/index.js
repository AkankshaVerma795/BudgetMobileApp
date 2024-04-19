// src/screens/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BudgetEntryScreen from '../components/BudgetEntryScreen';
import BudgetEntryListingScreen from '../components/BudgetEntryListingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
        <Stack.Screen
          name="BudgetEntryListing"
          component={BudgetEntryListingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
