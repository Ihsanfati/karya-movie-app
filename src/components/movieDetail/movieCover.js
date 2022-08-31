import React from 'react';
import {
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import StarIcon from '../../assets/images/star.png';

const MovieCover = ({movieDetail}) => {
  return (
    <ScrollView>
      <ImageBackground
        resizeMode="cover"
        style={styles.movieImage}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
        }}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={styles.gradientStyle}>
          <Text style={styles.movieTitle}>{movieDetail.title}</Text>
          <View style={styles.ratingContainer}>
            <Image source={StarIcon} />
            <Text style={styles.rating}>
              {''}
              {movieDetail.vote_average}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

MovieCover.propTypes = {
  movieDetail: PropTypes.instanceOf(Object).isRequired,
};

const styles = StyleSheet.create({
  movieImage: {
    width: '100%',
    height: 350,
  },
  gradientStyle: {
    padding: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  movieTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: {
    marginLeft: 10,
    color: 'yellow',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default MovieCover;