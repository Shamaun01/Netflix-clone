import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  API_KEY = "6b2fe995170bf68ec4f65f70ee664924";
  useEffect(() => {
    const movieData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) =>
          setMovies(
            data.results
          )
        );
    };
    movieData();
  }, []);
  return (
    <View>
        <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>{title}</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies.map((movie, id) => (
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
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

export default MovieRow;

const styles = StyleSheet.create({});
