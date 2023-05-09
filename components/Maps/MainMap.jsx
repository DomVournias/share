import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MainMap = () => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location.coords);
    })();
  }, []);

  console.log(location);

  if (!location) {
    return null;
  }

  return (
    <View>
      <GoogleMap
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="My Location"
          description="This is where I am"
        />
      </GoogleMap>
    </View>
  );
};

export default MainMap;

const GoogleMap = styled(MapView)`
  width: 100%;
  height: 100%;
`;
