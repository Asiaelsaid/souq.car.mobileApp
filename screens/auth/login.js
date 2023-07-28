import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./form.style.js";
import { useNavigation } from "@react-navigation/native";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../firebase/firebase";
import { Welcome } from "../../components/index";

const Login = () => {
  const navigation = useNavigation();
  const signInWithGoogle = async () => {
    await signInWithGooglePopup().then(() =>
      navigation.navigate("Bottom Navigation")
    );
  };
  return (
    <SafeAreaView style={styles.saveAria}>
      <View>
        <Image
          source={{ uri: "https://souq.car/imgs/logo.png" }}
          style={styles.image}
        />

        <Text style={styles.Wtxt}>Welcome in Souq.Car</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnContainer}
          onPress={() => signInWithGoogle()}
        >
          <Text style={styles.Gtxt}>G</Text>
          <Text style={styles.txt}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
