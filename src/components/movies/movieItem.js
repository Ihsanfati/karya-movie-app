import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import StarIcon from '../../assets/images/star.png';

const movieItem = ({item, movieCardSizeStyle, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', item)}>
    <ImageBackground
      resizeMode="cover"
      style={[movieCardSizeStyle, styles.marginRight20]}
      imageStyle={styles.backgroundImageStyle}
      source={{
        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      }}>
      <LinearGradient
        colors={['#00000000', '#000000']}
        style={styles.gradientStyle}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          <Image source={StarIcon} />
          <Text style={styles.rating}>
            {''}
            {item.vote_average}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);

movieItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  movieCardSizeStyle: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired
};

const styles = StyleSheet.create({
  marginRight20: {
    marginRight: 20,
  },
  backgroundImageStyle: {
    borderRadius: 10,
  },
  movieTitle: {
    color: 'white',
  },
  gradientStyle: {
    padding: 10,
    height: '100%',
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginTop: 5,
    color: 'yellow',
    fontWeight: '700',
  },
});

export default movieItem;