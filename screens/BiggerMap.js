import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import MapView, { Overlay, PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import BackgroundGeolocation from "react-native-background-geolocation";
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
  useEffect(()=>{
    BackgroundGeolocation.addGeofence({
      identifier: "Home",
      radius: 200,
      latitude: 41.014970,
      longitude: 28.976984,
      notifyOnEntry: true,
      notifyOnExit: true,
      extras: {
        route_id: 1234
      }
    }).then((success) => {
      console.log("[addGeofence] success");
      alert("geofence started")
    }).catch((error) => {
      console.log("[addGeofence] FAILURE: ", error);
    });
    BackgroundGeolocation.ready({
      // Geolocation Config
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      // Activity Recognition
      stopTimeout: 1,
      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
      // HTTP / SQLite config
      url: 'https://berkanapp.herokuapp.com/locations',
      batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
      
    }, (state) => {
      console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);

      if (!state.enabled) {
        ////
        // 3. Start tracking!
        //
        BackgroundGeolocation.start(function() {
          console.log("- Start success");
        });
      }
    });
    BackgroundGeolocation.onGeofence(geofence => {
      alert("Youre on a geofence", geofence)
    })
  }, [])

  useEffect(()=> {
    if(coord != undefined ){
      if(distance(JSON.stringify(coord.latitude), JSON.stringify(coord.longitude), 41.014945, 28.977038) < 200){
        alert("test")
      }
    }
  }, [coord])
  
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
  function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344 
  
      return dist;
    }
  }