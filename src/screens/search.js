import React, { useState }from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CustomTextInput from '../components/customTextInput';
import CustomButton from '../components/customButton';

const Search = () => {
  const [ movieTitle, setMovieTitle ] = useState("");
  return(
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Cari Film</Text>
      <CustomTextInput
        placeholder="Search..."
        onChange={setMovieTitle}
        numberOfLines={1}
        multiline={false}
        defaultValue={movieTitle}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Search"
          width="100%"
          onPress={() => {console.log(movieTitle)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30
  }
});

export default Search;