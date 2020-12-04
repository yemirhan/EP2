import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { View, Text, SafeAreaView } from "react-native";
const Routes = () => {
  // const {user, setUser} = useContext(AuthContext);
  // const [initialising, setInitialising] = useState(true)

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initialising) setInitialising(false);
  // }
  // useEffect(async () => {
  //   const subscriber = await auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, [])
  // if(initialising) return <SafeAreaView><View><Text>Deneme</Text></View></SafeAreaView>;

  // return (
  //   <NavigationContainer>
  //     {user? <AppStack />: <AuthStack />}
  //   </NavigationContainer>
  // );
  return( <NavigationContainer>
        <AuthStack></AuthStack>
     </NavigationContainer>)
};

export default Routes;
