import { AsyncStorage } from 'async-storage';

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('@BudgetEntries', JSON.stringify(data));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const fetchData = async () => {
  try {
    const data = await AsyncStorage.getItem('@BudgetEntries');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  
