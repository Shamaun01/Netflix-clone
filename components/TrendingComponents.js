import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

const TrendingComponents = () => {
  API_KEY = "6b2fe995170bf68ec4f65f70ee664924";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  console.log(movies);
  return (
    <View>
      
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
      {movies.slice(0, 10).map((movie, id) => (
          <Pressable style={{flexDirection:"row",alignItems:"center"}}>
            <Text
              style={{
                fontSize: 85,
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                zIndex:5,
                top: 40,
                right: 90,
                marginTop: 20,
              }}
            >
              {id + 1}
            </Text>

            <Image
              style={{
                width: 105,
                margin: 10,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingComponents;

const styles = StyleSheet.create({});
