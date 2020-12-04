import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import MapView from "react-native-maps";
// import { windowHeight, windowWidth } from "../utils/Dimentions";

// // import  Achivements  from "./Achivements";
// const MainPage = ({ navigation }) => {
//   const allCoords = [{
//     latitude: 41.008386,
//     longitude: 28.980121,
//     id: 1,
//     title: "Hagia Sophia"
//   }];
//   return (<>
//     <MapView style={styles.map}
//     loadingEnabled={true}
//       region={{
//         latitude: 41.013304,
//         longitude: 28.96136,
//         latitudeDelta: 0.037,
//         longitudeDelta: 0.0121,
//       }}
//       pitchEnabled={false}
//       rotateEnabled={false}
//       zoomEnabled={false}
//       scrollEnabled={false}
//       showsPointsOfInterest={false}
//     ></MapView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     width: windowWidth,
//     height: windowHeight / 3,
//   },
// });

// // const Drawer = createDrawerNavigator();

// export default MainPage;
// // export default function MainScreen({ navigation }) {
// //   return (
// //     <Drawer.Navigator initialRouteName="MainPage">
// //       <Drawer.Screen name="MainPage" component={MainPage} options={{
// //           headerRight: () => (
// //             <Button
// //               onPress={() => navigation.openDrawer()}
// //               title="Info"
// //               color="#fff"
// //             />
// //           ),
// //         }} />
// //       {/* <Drawer.Screen name="Achivements" component={Achivements} /> */}
// //     </Drawer.Navigator>
// //   );
// // }

const MainPage = () => {
  return <View><Text>Hi!</Text></View>
}
export default MainPage