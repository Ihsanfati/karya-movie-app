import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const CategoryItem = ({item}) => (
  <TouchableOpacity onPress={() => console.log('press')}>
    <View style={styles.categoryContainer}>
      <Text>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

CategoryItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'dark',
    marginRight: 20,
  },
});

export default CategoryItem;