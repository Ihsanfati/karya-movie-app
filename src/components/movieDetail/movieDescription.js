import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const MovieDescription = ({movieDetail}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{movieDetail.overview}</Text>
      <View style={styles.movieInfoWrapper}>
        <View>
          <Text style={styles.label}>Original Language</Text>
          <Text style={styles.text}>{movieDetail.original_language}</Text>
        </View>
        <View style={styles.marginLeft10}>
          <Text style={styles.label}>popularity</Text>
          <Text style={styles.text}>{movieDetail.popularity}</Text>
        </View>
      </View>
      <View style={styles.movieInfoWrapper}>
        <View>
          <Text style={styles.label}>Release Date</Text>
          <Text style={styles.text}>{movieDetail.release_date}</Text>
        </View>
        <View style={styles.marginLeft10}>
          <Text style={styles.label}>Vote Count</Text>
          <Text style={styles.text}>{movieDetail.vote_count}</Text>
        </View>
      </View>
    </View>
  );
};

MovieDescription.propTypes = {
  movieDetail: PropTypes.instanceOf(Object).isRequired,
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify'
  },
  movieInfoWrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
  label: {
    fontWeight: '700',
    fontSize: 16,
  },
  marginLeft10: {
    marginLeft: 20,
  },
});

export default MovieDescription;