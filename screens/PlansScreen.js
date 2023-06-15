import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto, Entypo } from "@expo/vector-icons";
import Plans from "../data/Plans";
import { useStripe } from "@stripe/stripe-react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRoute } from "@react-navigation/native";


const PlansScreen = () => {
  const [selected, setSelected] = useState([]);
  const route = useRoute();
  const email =route.params.email;
  const password = route.params.password;
  const [price, setPrice] = useState();
  console.log(selected);
  console.log(price);
  const data = Plans;
  const stripe = useStripe();
  const subscribe = async () => {
    const response = await fetch("http://192.168.0.196:8080/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(price * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Merchant Name ',
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    else {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log(userCredentials);
          const user = userCredentials.user;
          console.log(user.email);
        }
      );
    }
  };

  return (
    <>
      <ScrollView
        style={{ flex: 1, marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "600" }}>
            Choose the plan that is right for you
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontWeight: "600", fontSize: 17 }}>
              Watch all you want Ad free
            </Text>
          </View>
          <View
            style={{ marginTop: 3, flexDirection: "row", alignItems: "center" }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontWeight: "600", fontSize: 17 }}>
              Recommendation just for you
            </Text>
          </View>
          <View
            style={{ marginTop: 3, flexDirection: "row", alignItems: "center" }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontWeight: "600", fontSize: 17 }}>
              Cancel your plan any time
            </Text>
          </View>
          <View style={{ marginTop: 20 }} />

          {data.map((item, index) => (
            <Pressable
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              style={
                selected.includes(item.name)
                  ? {
                      height: 160,
                      borderRadius: 6,
                      borderColor: "#E50914",
                      borderWidth: 3,
                      padding: 15,
                      margin: 10,
                    }
                  : {
                      height: 160,
                      borderRadius: 6,
                      borderColor: "#E50914",
                      borderWidth: 0.7,
                      padding: 15,
                      margin: 10,
                    }
              }
              key={index}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Price: ${item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                  >
                    VideoQuality: {item.videoQuality}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}
                  >
                    Resolution: {item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{ marginRight: 6 }}
                  name="netflix"
                  size={28}
                  color="black"
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>You can watch on :</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device) => (
                    <Entypo
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={27}
                      color="#E50914"
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {selected.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#E50914",
            flexDirection: "row",
            padding: 10,
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
            height: 55,
            borderRadius: 6,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
              Selected plan : {selected}
            </Text>
          </View>
          <Pressable onPress={subscribe}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              PAY: ${price}
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});
