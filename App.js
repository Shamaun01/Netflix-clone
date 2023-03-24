import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <StripeProvider publishableKey="pk_test_51MoTmXGJUdbsynQ9JwVzVi9LSZNxo7vdMj5XVCF3SW0VZ7oePMrgOTGuP42nXN4XumwSobyc8a6wPwwPebrhOtue00RoxarBrN">
        <StackNavigator />
        <StatusBar style="" />
      </StripeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
