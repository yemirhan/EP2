import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import MapView, { Overlay, PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import { windowHeight, windowWidth } from "../utils/Dimentions";
const BiggerMap = () => {
  const [coord, setCoord] = useState();
  Geolocation.watchPosition(
    (c) => setCoord({
      latitude: c.coords.latitude,
      longitude: c.coords.longitude,
    }),
    (error) => alert(error),
    {
      enableHighAccuracy: true,
    },
  );
  let regions = {
    latitude: 40.995688,
    longitude: 29.054512,
    radius: 11000,
    identifier: 1,
  };
  
  const [growValue] = useState(new Animated.Value(0));
  const grow = growValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0', '10'],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(growValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [growValue]);
  const coordDolmabahce = {
    latitude: 41.0391683,
    longitude: 28.9982707,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  
  return (<MapView
      style={styles.map}
      // onPress={() => navigation.navigate("BiggerMap")}
      loadingEnabled={true}
      region={{
        latitude: 41.008351,
        longitude: 28.977896,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      // provider={PROVIDER_GOOGLE}
      minZoomLevel={14}
    >
     <Marker coordinate={Ayasofya} title="Ayasofya"/>
     <Marker coordinate={SAC} title="Sultan Ahmet Camii" />
     <Marker coordinate={Yerebatan} title="Yerebatan" />
     <Marker coordinate={Ayairini} title="Aya İrini" />
     <Marker coordinate={Dikilitas} title="Dikilitaş" />
     <Marker coordinate={BSM} title="Büyük Saray Mozaikleri Müzesi" />
     <Marker coordinate={IAM} title="İstanbul Arkeoloji Müzesi" />
     <Marker coordinate={TSM} title="Topkapı Sarayı Müzesi" />
     {coord !== undefined && <Marker coordinate={coord} />}
     {/* {coord !== undefined && <Marker coordinate={coordDolmabahce} anchor={{x: 0.5, y: 0.5}}>
        <View
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              transform: [{scale: grow}],
              backgroundColor: '#1976d299',
            }}
          />
        </View>
      </Marker> } */}
      {/* <Overlay
        image="https://www.laminex.com.au/medias/p-LX-ColourCollection-Chalk-White-RGB-1200x1200-LR.jpg-1200Wx979H?context=bWFzdGVyfGltYWdlc3wyNzM1OXxpbWFnZS9qcGVnfGgwNS9oYWMvODg2Njg0NTgxODkxMC9wX0xYX0NvbG91ckNvbGxlY3Rpb25fQ2hhbGtfV2hpdGVfUkdCXzEyMDB4MTIwMF9MUi5qcGdfMTIwMFd4OTc5SHxiM2Y1ZGUyYzYxMTc5YjUwMzZkNjA4NjEzZWM3ZDg4YWVjOWM4ZjdhMDNhNTBlYzEyZTc3NmRlOGRlOTFiMzEx"
        bounds={[
          [-90, -180],
          [90, 180],
        ]}
      /> */}
    </MapView>
    
  );
};
export default BiggerMap;

const styles = StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
  },
});



const Ayasofya = {
    latitude: 41.008386,
    longitude: 28.980121,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,

  }
const SAC = {
    latitude: 41.005256,
    longitude: 28.976775,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //blue

  }

const Yerebatan = {
    latitude: 41.008351,
    longitude: 28.977896,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //yerebatan

  }

const Ayairini = {
    latitude: 41.009812,
    longitude: 28.981068,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //aya irini

  }

const Dikilitas = {
    latitude: 41.005850,
    longitude: 28.975299,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //dikilitaş

  }

const BSM = {
    latitude: 41.004291,
    longitude: 28.977492,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //bsm

  }
const IAM = {
    latitude: 41.011825,
    longitude: 28.981562,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //iam

  }
const TSM ={
    latitude: 41.011519,
    longitude: 28.982842,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, //iam
 
  }
