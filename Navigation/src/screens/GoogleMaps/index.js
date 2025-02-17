// AIzaSyBDG-z9SrOU8Ycqloicmuf7-wHbV8kbEVs, // has geoCoding, places

import 'react-native-get-random-values';  // <--- ADD THIS LINE
import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import GOOGLE_MAPS_API_KEY from "../../config/constants"

const GoogleMaps = () => {
  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        onFail={(err) => console.log("GooglePlacesAutocomplete fail --> ", err)}
      />

      <MapView
        style={{flex: 1}}
        zoomControlEnabled
        initialRegion={{
          // 21.170684792884373, 72.85015535051306
          latitude: 21.170684792884373,
          longitude: 72.85015535051306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          // 21.170964925248793, 72.85667848269942
          coordinate={{
            latitude: 21.170964925248793,
            longitude: 72.85667848269942,
          }}
          title="My Location"
          description="I am here..."></Marker>
      </MapView>
    </>
  );
}

export default GoogleMaps