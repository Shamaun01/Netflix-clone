import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MovieItems } from "../Context";
import { Entypo } from "@expo/vector-icons";
import { withTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
    const navigation = useNavigation ();
  const { profile, setProfile } = useContext(MovieItems);
  API_KEY = "6b2fe995170bf68ec4f65f70ee664924";
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) =>
          setMovies(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          )
        );
    };
    movieData();
  }, []);
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 480, position: "relative" }}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ height: 50, width: 120, marginTop: 20 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              style={{ marginRight: 10 }}
              name="search1"
              size={24}
              color="white"
            />
            <Pressable onPress={()=>navigation.navigate("Profile")}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                source={{ uri: profile.image }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            justifyContent: "center",
            width: "80%",
            paddingLeft: 20,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Tv Show{" "}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginHorizontal: 20,
            }}
          >
            {" "}
            Movies{" "}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Categories{" "}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="plus"
            size={24}
            color="white"
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white",marginTop:3}}>
            My List
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 6,
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
            width: 140,
            justifyContent: "center",
          }}
        >
          <Entypo name="controller-play" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
            Play
          </Text>
        </View>
        <View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="infocirlceo"
            size={24}
            color="white"
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white",marginTop:3 }}>
            Info
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
