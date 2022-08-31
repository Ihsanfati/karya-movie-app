import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../../constants';

import CategoryItem from './categoryItem';

const MovieCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(response => {
        setCategoryList(response.data.genres);
        setStatus('success');
      })
      .catch(errorResponse => {
        console.log(errorResponse);
        setStatus('failed');
        setError(errorResponse.message);
      });
  }, []);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />;
      case 'success':
        return (
          <View style={styles.container}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={categoryList}
              renderItem={CategoryItem}
              keyExtractor={item => item.id}
            />
          </View>
        );
      case 'failed':
        return <Text>{error}</Text>;
      default:
        return <Text>Not Found</Text>;
    }
  };

  return <View>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default MovieCategory;