import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomTextInput from '../components/customTextInput';
import CustomButton from '../components/customButton';

const Search = () => (
  <View style={styles.container}>
    <CustomTextInput
				placeholder="Search..."
        numberOfLines={1}
        multiline={false}
      />
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Search"
      width="100%"
      onPress={() => {}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  }
});

export default Search;