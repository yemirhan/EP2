import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from '../screens/MainScreen';

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  )
}

export default AppStack
