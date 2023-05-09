import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const SearchAutocomplete = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details) => {
        // 'details' is provided when fetchDetails = true
        // console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
    />
  );
};

export default SearchAutocomplete;
