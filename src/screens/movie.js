import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet} from 'react-native';
import TopBanner from '../components/movies/topBanner';
import MovieList from '../components/movies/movieList';
import MovieCategory from '../components/movies/movieCategory';

const Movie = ({navigation}) => (
  <ScrollView style={styles.container}>
    <TopBanner navigation={navigation}/>
    <MovieCategory />
    <MovieList 
      title="Top Rated Movie" 
      route="movie/top_rated"
      navigation={navigation}
    />
    <MovieList 
      title="Upcoming Movie" 
      route="movie/upcoming"
      navigation={navigation}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

Movie.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default Movie;