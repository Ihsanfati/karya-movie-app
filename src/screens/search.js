import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomTextInput from '../components/customTextInput';

const Search = () => (
  <View style={styles.container}>
    <CustomTextInput
				placeholder="Search..."
        numberOfLines={1}
        multiline={false}
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