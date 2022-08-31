import React, { useState }from 'react';
import { View, StyleSheet } from 'react-native';

import CustomTextInput from '../components/customTextInput';
import CustomButton from '../components/customButton';

const Search = () => {
  const [ movieTitle, setMovieTitle ] = useState("");
  return(
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search..."
        onChange={setMovieTitle}
        numberOfLines={1}
        multiline={false}
        defaultValue={movieTitle}
      />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Search"
        width="100%"
        onPress={() => {console.log(movieTitle)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  }
});

export default Search;