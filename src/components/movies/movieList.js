import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../../constants';

import MovieItem from './movieItem';

const normalSizeStyle = {
  width: 150,
  height: 180,
};

const MovieList = ({title, route, navigation}) => {
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${route}?api_key=${API_KEY}`)
      .then(response => {
        setMovieList(response.data.results);
        setStatus('success');
      })
      .catch(errorResponse => {
        setStatus('failed');
        setError(errorResponse.message);
      });
  }, [route]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />;
      case 'success':
        return (
          <View style={styles.marginTop20}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.marginTop20}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movieList}
                renderItem={({item}) => (
                  <MovieItem
                    item={item}
                    movieCardSizeStyle={normalSizeStyle}
                    navigation={navigation}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
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

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default MovieList;