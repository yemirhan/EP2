import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import MainScreen from "../screens/MainScreen";
import BiggerMap from "../screens/BiggerMap";
const Stack = createStackNavigator();
const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "Onboarding";
  } else {
    routeName = "Onboarding";
  }
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#f9fafd",
            shadowColor: "#f9fafd",
            elevation: 0,
          },
        })}
      />
      <Stack.Screen name="BiggerMap"
        component={BiggerMap}
        options={{ header: () => null }} />
    </Stack.Navigator>
  );
};
export default AuthStack;
