import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import MovieCover from '../components/movieDetail/movieCover';
import MovieDescription from '../components/movieDetail/movieDescription';
import MovieList from '../components/movies/movieList';

const MovieDetail = ({route, navigation}) => {
  const movieDetail = route.params;
  return (
    <ScrollView>
      <MovieCover movieDetail={movieDetail} />
      <MovieDescription movieDetail={movieDetail} />
      <View style={styles.movieList}>
        <MovieList
          title="Similar Movies"
          route={`movie/${movieDetail.id}/similar`}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

MovieDetail.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const styles = StyleSheet.create({
  movieList: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default MovieDetail;