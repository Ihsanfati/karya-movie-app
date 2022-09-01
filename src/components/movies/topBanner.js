import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../../constants';

import {View, FlatList, Text, ActivityIndicator} from 'react-native';

import MovieItem from './movieItem';

const bannerSizeStyle = {
  width: 320,
  height: 180,
};

const TopBanner = ({navigation}) => {
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then(response => {
        setMovieList(response.data.results);
        setStatus('success');
      })
      .catch(errorResponse => {
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
          <FlatList
            snapToInterval={280}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movieList}
            renderItem={({item}) => (
              <MovieItem
                item={item}
                movieCardSizeStyle={bannerSizeStyle}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.id}
          />
        );
      case 'failed':
        return <Text>{error}</Text>;
      default:
        return <Text>Not Found</Text>;
    }
  };

  return <View>{renderContent()}</View>;
};

TopBanner.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default TopBanner;
