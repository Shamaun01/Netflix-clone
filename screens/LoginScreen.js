import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation ();
  console.log(input);
  
  return (
    <View
      style={{
        marginTop: 30,
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Image
            style={{ height: 50, width: 120, marginTop: 20 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>
        <View style={{ width: 320, marginTop: 45 }}>
          <Input
            value={input}
            onChangeText={(text) => setInput(text)}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            type="email"
            placeholder="Email"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            type="password"
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
        </View>
        <Pressable
          style={
            password.length > 4
              ? {
                backgroundColor:"red",
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                }
              : {
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 14,
                }
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "white",
            }}
          >
            Sign In
          </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              marginTop: 20,
              color: "white",
            }}
          >
            New to Netflix ? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
