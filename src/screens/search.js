import React, { useState }from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import MovieItem from '../components/movies/movieItem';
import axios from 'axios';

import CustomTextInput from '../components/customTextInput';
import CustomButton from '../components/customButton';
import { BASE_URL, API_KEY } from '../constants';

const normalSizeStyle = {
  width: 150,
  height: 180,
};

const Search = ({navigation}) => {
  const [ movieTitle, setMovieTitle ] = useState("");
  const [ movieList, setMovieList ] = useState([]);
  const [ status, setStatus ] = useState("");

  const searchMovie = () => {
    axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieTitle}`)
    .then(response => {
      setMovieList(response.data.results);
      if (movieList.length != 0) {
        setStatus("success");
      }
      console.log(status);
      console.log(movieList);
    })
    .catch(errorResponse => {
      setStatus('failed');
    });
  }

  switch(status) {
    case 'success':
      return(
        <View style={styles.marginTop20}>
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
      )
    case 'back':
      return(
        <View style={styles.container}>
        <Text style={styles.pageTitle}>Cari Film</Text>
        <CustomTextInput
          placeholder="Search..."
          onChange={setMovieTitle}
          numberOfLines={1}
          multiline={false}
          defaultValue={movieTitle}
        />
        <View style={styles.spacerTop}>
          <CustomButton
            backgroundColor="#247881"
            color="#fff"
            text="Search"
            width="100%"
            onPress={() => {searchMovie()}}
          />
        </View>
      </View>
      )
    case 'failed':
      return <View><Text>Data cannot be fetched...</Text></View>
    default:
      return(
        <View style={styles.container}>
        <Text style={styles.pageTitle}>Cari Film</Text>
        <CustomTextInput
          placeholder="Search..."
          onChange={setMovieTitle}
          numberOfLines={1}
          multiline={false}
          defaultValue={movieTitle}
        />
        <View style={styles.spacerTop}>
          <CustomButton
            backgroundColor="#247881"
            color="#fff"
            text="Search"
            width="100%"
            onPress={() => {searchMovie()}}
          />
        </View>
      </View>
      )
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30
  }
});

export default Search;